import React, { useState, useEffect } from "react";
import ListProducts from "../components/products/ListProducts";
import RegisterProduct from "../components/products/RegisterProducts";
import toast, {Toaster} from 'react-hot-toast';


const Products =()=>{
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/products";
    const [id, setId] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);


    const fecthProducts = async ()=>{

        const response = await fetch(API);
        if(!response.ok){

            throw new Error("Hubo  un error al obtener los productos")
        }
        const data = await response.json();
        setProducts(data)
        setLoading(false)

    };

    useEffect(()=>{
        fecthProducts();
    },[]);

    const saveProduct = async(e)=>{
        e.preventDefault();
        const newProduct = {
            name: nameProduct,
            description: description,
            price: price,
            stock: stock, 
        };

        const response = await fetch(API,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        if(!response.ok){
            throw new Error ("hubo un error al registrar un producto")  
        }

        const data = await response.json();
        toast.success('producto registrado');
        setProducts(data);
        fecthProducts();
        setNameProduct("");
        setDescription("");
        setPrice("");
        setStock("")
        
    };

    const deleteProducts= async(id)=>{

        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
        });

        if(!response.ok){
            throw new Error ("Error al eliminar el producto")
        }

        toast.success('Producto eliminado')
        fecthProducts();
    };

    const updateProducts = async(dataProduct)=>{

        setId(dataProduct._id);
        setNameProduct(dataProduct.name);
        setDescription(dataProduct.description);
        setPrice(dataProduct.price);
        setStock(dataProduct.stock);
        setActiveTab("form")

    }

    const HandleEdit = async (e)=>{

        e.preventDefault();

        try {

            if(price === "" || stock === ""|| nameProduct === "" || description === ""){
                toast.error("los campos no pueden estar vacios")
                return;
            }
            if (isNaN(price) || isNaN(stock)) {
                toast.error("El precio y el stock deben ser números");
                return;
            }

            const editProduct ={
                name: nameProduct,
                description: description,
                price: price,
                stock: stock,
                products:products,
            }

            const response = await fetch(`${API}/${id}`,{
                method: "PUT",
                headers:{"Content-Type": "application/json",
                },
                body: JSON.stringify(editProduct),
            });

            if(!response.ok){
                throw new Error("Hubo un error al actualizar el producto")
            }

            const data = await response.json();
            toast.success("producto actuzalizado");
            setId("")
            setNameProduct("");
            setDescription("");
            setPrice("");
            setStock("");
            setActiveTab("list")
            fecthProducts();
        } catch (error) {
            console.error("Error al editar la categoria:",  error)
        }
    };

    return(
        <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">productos</h1>
        <div>
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
              onClick={() => setActiveTab("list")}
            >
              Lista de Productos
            </button>
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
              onClick={() => {
                setActiveTab("form");
              }}
            >
              Gestionar Productos
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListProducts
                // mi error era que en products lo tenia como products = {products} y es product = {products}
                  products={products} //otro error solucinadoña promp correcta que se manda en listProducts es "products"={products} no "product"={products}
                  loading={loading}
                  deleteProducts={deleteProducts}
                  updateProducts={updateProducts}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterProduct
                  setNameProduct={setNameProduct}
                  nameProduct={nameProduct}
                  setDescription={setDescription}
                  description={description}
                  setPrice={setPrice}
                  price={price}
                  setStock={setStock}
                  stock={stock}
                  saveProduct={saveProduct}
                  id={id}
                  HandleEdit={HandleEdit}
                />
              </div>
            )}
          </div>
        </div>
      </div>
            <Toaster
          toastOptions={{
            duration: 1000,
          }}
        />
    </div>
    );

};

export default Products;