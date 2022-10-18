import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import { ProductosLista } from "./Paginas/Productos";
import { ProductoItem } from "./Paginas/Productos/ProductoItem";
import { ProductosDetalles } from "./Paginas/Productos/ProductosDetalles";

export function Paginas() {
  return (
    <section>
      <Routes>
        <Route path="/" element={Inicio} />
        <Route path="/productos" element={ProductosLista} />
        <Route path="/producto/:id" element={ProductosDetalles} />
      </Routes>
    </section>
  );
}
