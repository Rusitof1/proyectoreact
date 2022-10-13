import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import { ProductosList } from "./paginas/Productos";
import { ProductosDetalles } from "./paginas/Productos/ProductosDetalles";

export default function Paginas() {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
      </Switch>
    </section>
  );
}
