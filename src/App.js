import React, {Component} from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import CardUser from "./Components/CardDulce/CardDulce";
import "./App.css"

class App extends Component{
  render(){
    return(
         <div>
          <NavBar/>
          <Header/>
          <div className="CardDiv">
          <CardUser
          name= "Torta con Frutilla"
          description="Para el comienzo de primevra, no te lo Pierdas, Click Leer Mas"
          />
          <CardUser
          name= "Torta Merengue"
          description="Para las personas que les encanta el merengue la mejor receta, Click Leer Mas"
          />
          <CardUser
          name= "Arcoiris"
          description="Imperdible torta para regalar a los mas pequeños de la familia, Click Leer Mas"
          />
          </div>
          
          </div>
    )
  }
} 
export default App;

// <header/> idea principal para usar componentes de forma mas rapida
// Mayormente se utilice se llamara de App.js