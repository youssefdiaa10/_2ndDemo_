import React from "react";

function Fruit({ name, price, disc, soldOut }) {
  return (
    // <li>
    //   {price > 30 ? <h3>{name} {price} {disc}</h3> : ""}
    // </li>
    <>
      <li>
        {name} {price} {disc} {soldOut ? "soldOut" : ""}
      </li>
    </>
  );
}

export default Fruit;
