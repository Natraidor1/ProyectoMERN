import React from "react";
import ProductCard from "./ProductsCard";

const ListProducts=({
    deleteProducts,
    updateProducts,
    loading,
    products,
})=>{
    return(

    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            deleteProducts={deleteProducts}
            updateProducts={updateProducts}
          />
        ))}
      </div>
    </div>
    );
}

export default ListProducts;