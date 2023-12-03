import  Button  from "./Button";
import { useState } from "react";

function ListGroup(props) {
  const { heading, item, onSelectItem } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {item.map((item, index) => (
          <>
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item} onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
              
            </li>
            <Button
             value="XPLORE"
            ></Button>
          </>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
