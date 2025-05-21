import React from "react"
import NavBar from "./NavBar"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Products from "../pages/Products";

function Navegation(){

    return (
        <>
          <NavBar />
          <Routes>
            <Route>
              <Route path="/Products" element={<Products />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/models" element={<Models />} />
              <Route path="/categories" element={<Categories />} />
            </Route>
          </Routes>
        </>
      );
}

export default Navegation;