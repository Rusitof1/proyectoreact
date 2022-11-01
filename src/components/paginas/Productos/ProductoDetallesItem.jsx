import React from "react";

const ProductoDetallesItem = ({ title, description, price, img }) => {
  console.log(title);
  return (
    <div id="caca">
      <h1>{title}</h1>
      <h1>{price}</h1>
      <h1>{description}</h1>
    </div>
  );
};

export default ProductoDetallesItem;
