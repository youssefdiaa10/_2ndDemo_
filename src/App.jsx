/* eslint-disable no-unused-vars */

import ConComponent from "./components/ConComponent";
import Counter from "./components/Counter";
import Demo from "./components/Demo";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  let person = {
    name: "Rob",
    age: "32",
    email: "qqqqqq@gmail.com",
    seatsNum: [1, 2, 3],
  };

  return (
    <>
      <div className="App">
        <Demo />
      </div>
    </>
  );
}

export default App;
