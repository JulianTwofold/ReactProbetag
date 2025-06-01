//import {MouseEvent} from "react";

import { useState } from "react";

interface Probs {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectItem}: Probs) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 && <p>No item found</p>;

 // const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
    <h1>{heading}</h1>
    {message}
    <ul className="list-group">
      {items.map((item, index) => (
        <li 
        key={item} 
        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
        //onClick={handleClick}
        onClick={() => {setSelectedIndex(index); onSelectItem(item)}}
        >{item}</li>
        ))}
    </ul>
    </>
  );
}

export default ListGroup;
