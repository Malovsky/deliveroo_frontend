import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import { useState, useEffect } from "react";

// https://deliveroo-back-kevin.herokuapp.com

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // fetch() version
  // useEffect(async () => {
  //   try {
  //     const response = await fetch(
  //       "https://deliveroo-back-kevin.herokuapp.com"
  //     );
  //     const data = await response.json();
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // VS

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

  console.log(data);

  return (
    <div className="App">
      <Header />
      <p>coucou</p>
    </div>
  );
}

export default App;
