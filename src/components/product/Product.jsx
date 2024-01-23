import "../product/productt.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [productsAll, setProductsAll] = useState({});
  const [errorMessage, setErrorMesage] = useState("");
  const url = "https://dummyjson.com/products";
 const navigate = useNavigate();
 
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProductsAll(response.data);
      })
      .catch((error) => {
        setErrorMesage(error.message);
      });
  }, []);
  const getProductId = (id) => {
    console.log(id);
  };
  return (
    <>
    <button className="btn btn-outline-danger " onClick={() =>{
    navigate('/home')
 }}>back to home page</button>
      <p className="text-center text-danger">{errorMessage}</p>
      <h1 className=" text-right">Products:{productsAll.total}</h1>
      <div className="products-cover">
        <table>
          {productsAll?.products?.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="thumbnail">
                  <img src={product.thumbnail} />
                </div>
              </td>
              <td>{product.title}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={()=>getProductId(product.id)} className="btn btn-success">View</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Product;
