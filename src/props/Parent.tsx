import React from "react";
import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked!")}>
      DASDA
    </ChildAsFC>
  );
};

export default Parent;
