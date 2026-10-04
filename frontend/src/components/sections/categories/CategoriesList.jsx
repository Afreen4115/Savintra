import content from "../../../data/content.json";
import Category from "./Category";

const CategoriesList = () => {
  return (
    <>
      {content?.pages?.shop?.sections?.map((category, index) => (
        <Category
          key={category?.title + index}
          title={category?.title}
          data={category?.data}
        />
      ))}
    </>
  );
};

export default CategoriesList;
