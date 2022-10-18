import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import { ProductosLista } from "./Paginas/Productos";
import { ProductoItem } from "./Paginas/Productos/ProductoItem";
import { ProductosDetalles } from "./Paginas/Productos/ProductosDetalles";

export function Paginas() {
  return (
    <section>
      <Routes>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductosLista} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
      </Routes>
    </section>
  );
}
