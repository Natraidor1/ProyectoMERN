import React from "react";
import Button from "../Button";

const productCard = ({product, deleteProducts, updateProducts})=>{
    return(
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {product.name} {product.description}
          </h2>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {product.price}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Telephone:</span> {product.stock}
          </p>
          <p>id: {product._id}</p>
  
  
        <Button 
          label={"Eliminar"}
          actionButton={() => deleteProducts(product._id)}
          colorClass={"danger"}
          />
  
        <Button 
          label={"Editar Información"}
          actionButton={() => updateProducts(product)}
          colorClass={"warning"}
          />
  
        </div>
      </div>
    );
}

export default productCard;