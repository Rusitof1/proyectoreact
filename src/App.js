import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="saludos" />
      <Hero />
      <h1 className="text-3xl font-bold underline">Hola Mundo!!!!</h1>
      <Footer />
    </>
  );
}

export default App;
