import React from "react"
import NavBar from "./NavBar"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Products from "../pages/products";
/*import Reviews from "../pages/reviews";*/

function Navegation(){

    return (
        <>
          <NavBar />
          <Routes>
            <Route>
              <Route path="/products" element={<Products />} />
              {/*<Route path="/reviews" element={<Reviews />}/>*/}
            </Route>
          </Routes>
        </>
      );
}

export default Navegation;