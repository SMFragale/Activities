import { useState } from "react";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import Header from "./Components/Header";

function App() {
  const [items, setItems] = useState([]);

  function toggleItemPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function removeItemWithId(id) {
    setItems((items) => items.filter((i) => i.id !== id));
  }

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function getItemsCount() {
    return items.length;
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear your list?"
    );
    if (confirmed) setItems(() => []);
  }

  function getPackedCount() {
    return items.filter((item) => item.packed).length;
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={addItem} />
      <PackingList
        initialItems={items}
        removeItemWithId={removeItemWithId}
        toggleItemPacked={toggleItemPacked}
        clearList={clearList}
      />
      <Stats getItemsCount={getItemsCount} getPackedCount={getPackedCount} />
    </div>
  );
}

export default App;
