import React from "react"
import NavBar from "./NavBar"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Products from "../pages/products";

function Navegation(){

    return (
        <>
          <NavBar />
          <Routes>
            <Route>
              <Route path="/Products" element={<Products />} />
            </Route>
          </Routes>
        </>
      );
}

export default Navegation;