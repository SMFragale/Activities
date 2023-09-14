export default function Stats({ getItemsCount, getPackedCount }) {
  const percentage =
    getItemsCount() === 0
      ? 0
      : Math.round((getPackedCount() / getItemsCount()) * 100);
  const itemsString = getItemsCount().length !== 1 ? "items" : "item";

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything, have fun on your trip!"
          : "You have " +
            getItemsCount() +
            " " +
            itemsString +
            " on your list, and you have packed " +
            percentage +
            "%"}
      </em>
    </footer>
  );
}
