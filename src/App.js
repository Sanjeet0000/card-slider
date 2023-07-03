import CardSlider from "./CardSlider";

const App = () => {
  const cards = [
    {
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://fastly-production.24c.in/hello-ar/dev/uploads/3feb3bb1-5347-4dd7-a0c6-358948bd2fc7/45193a12-0b4d-436c-bcaa-a7729762ac28/43.jpg?w=690&auto=format",
    },
    {
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://fastly-production.24c.in/hello-ar/dev/uploads/6427ce4d222ff0d33d0252af/77d69742-c44a-4c67-a59d-90192e078dc8/slot/10000914796-9f8498c4e48d4e73b557326781c9f837-Exterior-8.jpg?w=690&auto=format",
    },
    {
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://fastly-production.24c.in/hello-ar/dev/uploads/6448a9960c1656be68b3e151/e3dda674-8467-4b88-addd-f379901a241d/44.jpg?w=690&auto=format",
    },
    {
      title: "Card 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://fastly-production.24c.in/hello-ar/dev/uploads/6423fb15df4b2e1923bef177/fb478938-7f58-4fa3-a785-f8a828058e9e/slot/10177518791-d3c07314744344d1975da98286687359-Exterior-8.jpg?w=690&auto=format",
    },
    {
      title: "Card 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://fastly-production.24c.in/hello-ar/dev/uploads/b72bd41b-4794-4daf-9317-26842986b92a/3099d658-d79f-46b5-80ed-f2a939fdcd7d/44.jpg?w=690&auto=format",
    },
    {
      title: "Card 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://fastly-production.24c.in/hello-ar/dev/uploads/7e129d51-4b67-4d5c-94a9-f604f926e598/b71f7ea6-ec0e-4227-97c8-338378abb8d4/43.jpg?w=690&auto=format",
    },
  ];

  return (
    <div className="App">
      <CardSlider slide={cards} />
    </div>
  );
};

export default App;
