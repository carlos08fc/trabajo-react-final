import React from "react";
// @styles

export default props => {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};
