import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/home";
import TableAdmin from "./tableAdmin";



const PageRouting = () => {
  
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/admin" element={<TableAdmin />}/>
        </Routes>
      </BrowserRouter>
     </div> 
  );
};
export default PageRouting;
