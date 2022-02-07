import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Category from "./components/Category";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
                  <Category key={index} item={item} />
                )
              );
            })}
          </div>
          <div className="basket">
            <p>valider votre panier</p>
            <p>votre panier est vide</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
