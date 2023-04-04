import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import CardUser from "./Components/CardDulce/CardDulce";
import "./App.css";
import Shopl from "./Components/Shop/Shop";
import Contador from "./Components/Cont/Cont";
import getFetch from "./Components/Data/Data";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((resp) => setData(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <NavBar>
        <Shopl />
      </NavBar>
      <Header />
      <Contador />
      <div className="CardDiv">
        {
         loading ? <h2>Cargando...</h2>:
        
        data.map((item) => (
          <CardUser
            key={item.id}
            name={item.name}
            description={item.description}
            img={item.img}
          />
          
        ))}
      </div>
    </div>
  );
}

export default App;
// <header/> idea principal para usar componentes de forma mas rapida
// Mayormente se utilice se llamara de App.js