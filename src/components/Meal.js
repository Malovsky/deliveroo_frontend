const Meal = ({ meal }) => {
  console.log("meal frome meal.js : ", meal);
  return (
    <div className="menu-item">
      <div className="menu-card">
        <div className="menu-item-texts">
          <h3>{meal.title}</h3>
          <p className="meal-description">{meal.description}</p>
          <span className="menu-item-infos">
            <span className="price">{meal.price} €</span>
            {meal.popular && <span className="popular">* Populaire</span>}
          </span>
        </div>
        {meal.picture && (
          <div className="menu-item-photo-container">
            <img
              className="menu-item-photo"
              src={meal.picture}
              alt="Photo meal"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;
