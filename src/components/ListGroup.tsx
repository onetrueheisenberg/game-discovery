import React, { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, title, onSelectItem }: Props) => {
  const [selected, setSelected] = useState(-1);

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 ? (
        <p>List is Empty</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selected === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelected(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
