import React from "react";
import { Header } from "./components/Header/Index";
import { Carrito } from "./components/Carrito/Index";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/paginas/Inicio/Index";
import { ProductosLista } from "./components/paginas/Productos/Index";
import { ProductosDetalles } from "./components/paginas/Productos/ProductosDetalles";
import "boxicons";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Header />
          <Carrito />
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/productos" element={<ProductosLista />} />
            <Route exact path="/producto:id" element={<ProductosDetalles />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
