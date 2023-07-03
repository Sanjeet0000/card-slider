import React, { useState, useEffect } from "react";

const CardSlider = ({ slide }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [numSlides, setNumSlides] = useState(3);

  const renderSlide = (card, id) => {
    return (
      <div
        key={id}
        className="flex flex-col inline p-4 m-2 shadow-md bg-blue-300"
      >
        <img className="w-64 inline" src={card.imageUrl} alt={card.title} />
        <h2 className="text-xl font-bold inline">{card.title}</h2>
        <p className="inline">{card.description}</p>
      </div>
    );
  };

  const renderSlides = () => {
    const leftIndex = (currentSlide + slide.length - 1) % slide.length;
    const centerIndex = currentSlide % slide.length;
    const rightIndex = (currentSlide + 1) % slide.length;

    return (
      <div className="flex ">
        {numSlides === 1 &&
          renderSlide(slide[centerIndex], slide[centerIndex].id)}
        {numSlides === 3 && (
          <>
            {renderSlide(slide[leftIndex], slide[leftIndex].id)}
            {renderSlide(slide[centerIndex], slide[centerIndex].id)}
            {renderSlide(slide[rightIndex], slide[rightIndex].id)}
          </>
        )}
      </div>
    );
  };

  const handlePrevClick = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + slide.length - 1) % slide.length
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slide.length);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setNumSlides(1);
      } else {
        setNumSlides(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center h-screen bg-blue-100">
      <div className="flex flex-row justify-center self-center shadow-2xl bg-blue-200">
        <div className="flex w-1/6 justify-center">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded self-center"
            onClick={handlePrevClick}
          >
            PREV
          </button>
        </div>
        <div className="m-8 w-3/6">{renderSlides()}</div>

        <div className="flex w-1/6 justify-center">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded self-center"
            onClick={handleNextClick}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
