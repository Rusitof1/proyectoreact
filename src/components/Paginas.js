import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio/Index";
import { ProductosLista } from "./paginas/Productos";
import { ProductoItem } from "./paginas/Productos/ProductoItem";
import { ProductosDetalles } from "./paginas/Productos/ProductosDetalles";

export function Paginas() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductosLista />} />
        <Route path="/producto/:id" element={<ProductosDetalles />} />
      </Routes>
    </section>
  );
}
