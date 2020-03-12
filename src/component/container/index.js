import React, { useContext } from "react";
// @styles
const HeaderContainer = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

const ItemContainer = ({ title, child }) => {
  return (
    <div>
      <HeaderContainer>{title}</HeaderContainer>
      <div>{child}</div>
    </div>
  );
};
export default ItemContainer;
