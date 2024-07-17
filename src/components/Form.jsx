import React, { useState } from "react";

function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <>
      <div>
        {name.firstName} - {name.lastName}
        <form>
          <label htmlFor="input1">1st Name </label>
          <input
            onChange={(event) =>
              setName({ ...name, firstName: event.target.value })
            }
            id="input1"
            type="text"
            value={name.firstName}
          />

          <label htmlFor="input2"> 2nd Name </label>
          <input
            onChange={(event) =>
              setName({ ...name, lastName: event.target.value })
            }
            id="input2"
            type="text"
            value={name.lastName}
          />

          <button onClick={(event) => handleSubmit(event)}> Add</button>
        </form>
      </div>
    </>
  );
}

export default Form;
