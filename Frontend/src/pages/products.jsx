import { set } from "mongoose";
import React, { useState, useEffect } from "react";


const products =()=>{
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/products";
    const [id, setId] = useState("");
    const [nameProduct, setNameProduct] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);


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
            products:products,
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
        setStock(dataProduct.products);
        setActiveTab("form")

    }

    const HandleEdit = async (e)=>{

        e.preventDefault();

        try {
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

}
