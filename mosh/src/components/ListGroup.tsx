import { useState, useEffect } from "react";

export default function ListGroup() {
  let list = ["New York", "USA", "Tokyo", "London"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  function handleClick(index) {
    setSelectedIndex(index);
  }
  return (
    <>
      <h1>List</h1>
      {list.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              handleClick(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
