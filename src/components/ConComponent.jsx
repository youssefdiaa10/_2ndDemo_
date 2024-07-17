import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

function ConComponent() {
  let valid = true;

  return <div>{!valid ? <Code /> : <Welcome />}</div>;
}

export default ConComponent;
