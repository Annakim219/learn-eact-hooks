//useInput : update input

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  // const maxLen = (value) => value.length <= 10; // 10글자가 넘으면 input value가 업데이트 되지 않음.
  const maxLen = (value) => !value.includes("@"); // @를 포함하고 있으면 업데이트 되지 않음.
  const name = useInput("Mr. ", maxLen); // 초기값 설정
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
