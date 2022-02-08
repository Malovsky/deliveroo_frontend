import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Category from "./components/Category";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-back-kevin.herokuapp.com"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="App">
      <Header infosRestaurant={data} />

      <div className="content-center">
        <div className="content">
          <div className="content-category">
            {data.categories.map((item, index) => {
              return (
                data.categories[index].meals.length > 0 && (
                  <Category
                    key={index}
                    item={item}
                    cart={cart}
                    setCart={setCart}
                  />
                )
              );
            })}
          </div>
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
