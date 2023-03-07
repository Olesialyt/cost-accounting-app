import ContentItem from "./components/Costs/ContentItem";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2023, 2, 5),
      description: "Refregerator",
      price: 999.99,
    },
    {
      date: new Date(2023, 2, 15),
      description: "MacBook",
      price: 1234.76,
    },
    {
      date: new Date(2023, 2, 25),
      description: "Jeans",
      price: 45.99,
    }
  ];

  return (
    <div>
      <NewCost />
      <ContentItem costs={costs} />
    </div>
  );
}

export default App;
