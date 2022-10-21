import React from "react";
import { Header } from "./components/Header/Index";
import { Carrito } from "./components/Carrito/Index";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/Paginas";
import "boxicons";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
