import React, {Component} from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import CardUser from "./Components/CardDulce/CardDulce";
import "./App.css"
import logoImg from "./Components/CardDulce/cocina2.png"
import logoImgDos from "./Components/CardDulce/cocina3.png"
import logoImgTres from "./Components/CardDulce/cocina5.png"


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
          img= {logoImgDos}
          />
          <CardUser
          name= "Torta Merengue"
          description="Para las personas que les encanta el merengue la mejor receta, Click Leer Mas"
          img= {logoImg}
          />
          <CardUser
          name= "Arcoiris"
          description="Imperdible torta para regalar a los mas pequeños de la familia, Click Leer Mas"
          img= {logoImgTres}
          />
          </div>
          
          </div>
    )
  }
} 
export default App;

// <header/> idea principal para usar componentes de forma mas rapida
// Mayormente se utilice se llamara de App.js