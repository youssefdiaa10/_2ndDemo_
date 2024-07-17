import { useState, useRef, useEffect } from "react";

function Demo() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });
  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <h1>My Name is: {name}</h1>
        <p>
          I rendered <strong>{renderCount.current}</strong> times
        </p>
      </div>
    </>
  );
}

export default Demo;
