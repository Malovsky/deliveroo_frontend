import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import { useState, useEffect } from "react";

// https://deliveroo-back-kevin.herokuapp.com

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch("https://deliveroo-back-kevin.herokuapp.com");
    const data = await response.json();
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Header />
      <p>coucou</p>
    </div>
  );
}

export default App;
