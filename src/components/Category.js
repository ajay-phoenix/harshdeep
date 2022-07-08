import React from "react";
import category from "./category1.png";
import "./Category.css";

const Category = () => {
  return (
    <>
      <div className="category">
        <div className="category-1">
          <img src={category}></img>
          <h2>Category1</h2>
        </div>
        <div className="category-2">
          <img src={category}></img>
          <h2>Category2</h2>
        </div>
        <div className="category-3">
          <img src={category}></img>
          <h2>Category3</h2>
        </div>
      </div>
    </>
  );
};

export default Category;
