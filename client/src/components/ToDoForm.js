import { useState } from "react";
const ToDoForm = () => {
  const [text,setText] =useState("")

  

 const onFormSubmit = () => {};
  
  const onInputChange = (e) => {
    console.log(e.target.value);
    setText(e.Text.value);
  };
  
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label>Add a Task </label>
      <br />
      <input
        placeholder=".............."
        className="input"
        onChnage={onInputChange}
      />
    </form>
  );
};

export default ToDoForm;
