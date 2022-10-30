import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataProvider";
import { useParams } from "react-router-dom";

import ProductoDetallesItem from "./ProductoDetallesItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const {params} = useParams();

  const producto = productos.filter(product => product.id === params)
  return (
<div>
{producto.map(item => (
<ProductoDetallesItem description={item.description} title={item.title} img={item.img} price={item.price}/>))} 
</div>
  );
};
