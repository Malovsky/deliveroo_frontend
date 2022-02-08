import Meal from "./Meal";

const Category = ({ item, cart, setCart }) => {
  return (
    <div className="category-restaurant">
      <h2>{item.name}</h2>
      <div className="menu-items">
        {item.meals.map((meal, index) => {
          return <Meal key={index} meal={meal} cart={cart} setCart={setCart} />;
        })}
      </div>
    </div>
  );
};

export default Category;
