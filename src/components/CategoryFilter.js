import React, { useState } from "react";

function CategoryFilter(props) {
  const { categories, onSelectedCategory } = props;
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleClick(category){
    setSelectedCategory(category);
    onSelectedCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => handleClick("All")}
      >
        All
      </button>
      {categories && categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

