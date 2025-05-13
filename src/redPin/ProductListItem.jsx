import React from "react";

function ProductListItem({ productData, openProductDetails }) {
  return (
   
      <li className="productListItem">
         <a
          className="link"
          onClick={() => openProductDetails({ open: true ,id: productData.id })}
        >
        <span>{productData.title}</span>
        </a>
        <img src={productData.thumbnail} alt={productData.title} />
      </li>
   
  );
}

export default ProductListItem;
