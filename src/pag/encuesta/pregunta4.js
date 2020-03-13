import React, { useState } from "react";
import Conter from "../../component/container/index";

export default () => {
  const [select, setSelect] = useState(false);

  const onChange = e => {
    let value = e.target.value;
    if (e.target.type === "radio") {
      value = e.target.checked;
      setSelect(true);
    }
  };
  return (
    <Conter title="¿como ha sido su experencia en react?">
      <div>
        <div class="">
          <input
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            onChange={onChange}
          ></input>
          <label for="exampleRadios1">option1</label>
        </div>
        <div class="">
          <input
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
            onChange={onChange}
          ></input>
          <label for="exampleRadios1">option2</label>
        </div>
        <div class="">
          <input
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
            onChange={onChange}
          ></input>
          <label for="exampleRadios1">option3</label>
        </div>
      </div>
      {select && <input type="submit" value="siguiente"></input>}
    </Conter>
  );
};
