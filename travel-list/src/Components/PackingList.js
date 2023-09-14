import { useState } from "react";

export default function PackingList({
  initialItems,
  removeItemWithId,
  toggleItemPacked,
  clearList,
}) {
  const [sortCriteria, setSortCriteria] = useState("input");

  const sortByDescription = () => {
    return initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  };

  const sortByPackStatus = () => {
    return initialItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  };

  const sortItems = () => {
    if (sortCriteria === "description") {
      return sortByDescription();
    } else if (sortCriteria === "packed") {
      return sortByPackStatus();
    } else return initialItems;
  };

  return (
    <div className="list">
      <ul style={{ overflow: "auto", height: "100%" }}>
        {sortItems().map((item) => (
          <Item
            item={item}
            key={item.id}
            removeItemWithId={removeItemWithId}
            toggleItemPacked={toggleItemPacked}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>

        <button onClick={() => clearList()}>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item, removeItemWithId, toggleItemPacked }) {
  function handleRemoveItem() {
    removeItemWithId(item.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggleItemPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleRemoveItem}>❌</button>
    </li>
  );
}
