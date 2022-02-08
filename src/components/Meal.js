import { useEffect } from "react/cjs/react.development";

const Meal = ({ meal, cart, setCart }) => {
  const addToCart = (mealId) => {
    console.log("meal : ", mealId);
    const alreadyExsists = cart.find((cartMeal) => cartMeal.id === mealId);
    if (alreadyExsists) {
      console.log("IF alreadyExsists : ", alreadyExsists);
      const indexOfMeal = cart.indexOf(alreadyExsists);
      const newCart = [...cart];
      newCart[indexOfMeal] = {
        ...newCart[indexOfMeal],
        amount: newCart[indexOfMeal].amount + 1,
      };
      console.log("newCart = ", newCart);
      setCart(newCart);
    } else {
      const newCart = [...cart];
      newCart.push({
        id: mealId,
        title: meal.title,
        price: meal.price,
        amount: 1,
      });
      console.log("newCart = ", newCart);
      setCart(newCart);
    }
  };
  return (
    <div className="menu-item">
      <div
        className="menu-card"
        onClick={() => {
          addToCart(meal.id);
        }}
      >
        <div className="menu-item-texts">
          <h3>{meal.title}</h3>
          <p className="meal-description">{meal.description}</p>
          <span className="menu-item-infos">
            <span className="price">{meal.price} €</span>&nbsp; &nbsp;
            {meal.popular && (
              <span className="popular">
                <i className="fas fa-star"></i> Populaire
              </span>
            )}
          </span>
        </div>
        {meal.picture && (
          <div className="menu-item-photo-container">
            <img
              className="menu-item-photo"
              src={meal.picture}
              alt={meal.title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;
