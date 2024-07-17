/* eslint-disable no-unused-vars */
import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  let fruits = [
    { name: "Apple", price: 10, disc: "Tasty", soldOut: false },
    { name: "Banana", price: 20, disc: "5ara", soldOut: false },
    { name: "Mango", price: 30, disc: "Lecker", soldOut: true },
    { name: "Orange", price: 40, disc: "Delicious", soldOut: true },
    { name: "Pineapple", price: 50, disc: "7lwo", soldOut: false },
  ];

  console.log(fruits);
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          //   <li key={index}>
          //     {fruit.name}, {fruit.disc}, {fruit.price}
          //   </li>
          <Fruit
            key={index}
            name={fruit.name}
            price={fruit.price}
            disc={fruit.disc}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
