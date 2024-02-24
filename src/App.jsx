import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./components/product/product";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/product/header/Header";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
