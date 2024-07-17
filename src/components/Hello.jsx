/* eslint-disable react/prop-types */

function Hello({ person }) {
  // console.log(person);

  // props.myName = "gay";

  // eslint-disable-next-line react/prop-types
  // let { myName, age } = props;
  return (
    <>
      <div className="">
        <div>Hello from a component HELLO!</div>
        {/* <h1>{person}</h1> */}
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.email}</h1>
        <h1>{person.seatsNum}</h1>
      </div>
    </>
  );
}

export default Hello;
