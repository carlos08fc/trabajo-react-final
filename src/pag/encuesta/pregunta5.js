import React from "react";
import Conter from "../../component/container/index";

export default () => {
  return (
    <Conter title="Recomendaria react">
      <div>
        <div class="">
          <input
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          ></input>
          <label for="exampleRadios1">option1</label>
        </div>
        <div class="">
          <input
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          ></input>
          <label for="exampleRadios1">option2</label>
        </div>
        <div class="">
          <input
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
          ></input>
          <label for="exampleRadios1">option3</label>
        </div>
      </div>
      <button>Siguiente</button>
    </Conter>
  );
};
