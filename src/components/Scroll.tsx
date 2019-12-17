import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "hidden",
        border: "5px solid black",
        height: "100%"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
