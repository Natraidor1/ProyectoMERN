import React from "react";

const RegisterProduct=({nameProduct, setNameProduct,description, setDescription, price, setPrice, stock, setStock, saveProduct, id, HandleEdit})=>{
    <div className="">
      <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre Producto
          </label>
          <input
            type="text"
            name="name"
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Categoría"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Descripción"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <input
            type="text"
            name="description"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Descripción"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <input
            type="text"
            name="description"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Descripción"
          />
        </div>        

        {!id ? (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={(e) => saveProduct(e)}
          >
            Guardar
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={(e) => HandleEdit(e)}
          >
            Editar
          </button>
        )}
      </form>
    </div>
}

export default RegisterProduct;