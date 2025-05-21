import React from "react";
import Button from "../Button";

const productCard = ({products, deleteProducts, updateProducts})=>{
    return(
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {products.name} {products.description}
          </h2>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {products.price}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Telephone:</span> {products.stock}
          </p>
          <p>id: {products._id}</p>
  
  
        <Button 
          label={"Eliminar"}
          actionButton={() => deleteEmployee(products._id)}
          colorClass={"danger"}
          />
  
        <Button 
          label={"Editar Información"}
          actionButton={() => updateEmployee(products)}
          colorClass={"warning"}
          />
  
        </div>
      </div>
    );
}

export default productCard;