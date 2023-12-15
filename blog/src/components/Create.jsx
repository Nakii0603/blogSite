import React, { useState } from "react";

export default function Create() {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });


  const handleInputChange = (e, inputName) => {
    setInputValues({
      ...inputValues,
      [inputName]: e.target.value,
    });
  };

  return (
    <div className="flex gap-4">
      <input
        className="bg-black text-white"
        placeholder="type"
        value={inputValues.input1}
        onChange={(e) => handleInputChange(e, "input1")}
      />
      <input
        className="bg-black text-white"
        placeholder="type"
        value={inputValues.input2}
        onChange={(e) => handleInputChange(e, "input2")}
      />
      <input
        className="bg-black text-white"
        placeholder="type"
        value={inputValues.input3}
        onChange={(e) => handleInputChange(e, "input3")}
      />
      <input
        className="bg-black text-white"
        placeholder="type"
        value={inputValues.input4}
        onChange={(e) => handleInputChange(e, "input4")}
      />
      <div className="text-">{inputValues.input1.value}</div>

    </div>
    
  );
}
