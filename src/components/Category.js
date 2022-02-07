import Meal from "./Meal";

const Category = ({ item }) => {
  console.log(item);
  return (
    <div className="category-restaurant">
      <h2>{item.name}</h2>
      <div className="menu-items">
        {item.meals.length > 0 &&
          item.meals.map((meal, index) => {
            return <Meal key={index} meal={meal} />;
          })}
      </div>
    </div>
  );
};

export default Category;
