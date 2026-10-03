import React from "react";
import content from "../../../data/content.json"
import Category from "./Category";

const Categories = () => {
  return (
    <>
      {content?.categories?.map((category, index) => (
        <Category key={category?.title+index} title={category?.title} data={category?.data} />
      ))}
    </>
  );
};

export default Categories;
