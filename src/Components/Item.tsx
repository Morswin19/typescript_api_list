import React from "react";
import "../styles/Item.sass";

type Props = {
  number: number;
  abbreviation: string;
  name: string;
  division: string;
};

//one record from the list component
const Item: React.FC<Props> = ({ number, abbreviation, name, division }) => (
  <div className="item">
    <div className="itemInfoContainer">
      <div className="img">
        <img src={`https://picsum.photos/200/300?random=${number}"`} alt="" />
      </div>
      <ul>
        <li>
          <h2> {abbreviation}</h2>
        </li>
        <li>
          <h3>
            {" "}
            <strong>{name}</strong>
          </h3>
          <h3> {division}</h3>
        </li>
      </ul>
    </div>
  </div>
);

export default Item;
