const Header = ({ infosRestaurant }) => {
  return (
    <div>
      <header>
        <div className="header-container-center">
          <img
            className="logo"
            src="/deliveroo_logo.svg"
            alt="Logo Deliveroo"
          />
        </div>
      </header>
      <div className="global-infos-restaurant">
        <div className="infos-restaurant-container-center">
          <div className="infos-restaurant">
            <h1>{infosRestaurant.restaurant.name}</h1>
            <p>{infosRestaurant.restaurant.description}</p>
          </div>
          <div className="photo-restaurant">
            <img src={infosRestaurant.restaurant.picture} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
