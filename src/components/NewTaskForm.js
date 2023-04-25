import React, { useState } from "react";

function NewTaskForm(props) {
  const { categories, onTaskFormSubmit } = props;
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
  }

  function handleTextChange(e){
    setText(e.target.value);
  }

  function handleCategoryChange(e){
    setCategory(e.target.value);
  }

  const categoryOptions = categories.filter(category => category !== "All").map(category => (
    <option key={category} value={category}>{category}</option>
  ));


  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange} >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
