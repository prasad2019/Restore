import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalog from "../../features/Catalog/Catalog";


function App() {
  const [products, setProducts] = useState<Product[]>([]);
 
useEffect(() =>{
  fetch("http://localhost:5145/api/Products")
  .then(response => response.json())
  .then(data => setProducts(data))

}, [])

  function addProduct() {
    setProducts(prevState => [...prevState,
   {
    id : prevState.length + 101, 
    name : 'product' + (prevState.length + 1),
    price: (prevState.length * 100 + 100),
    brand: 'some brand',
    description: 'some description',
    pictureUrl: 'http://picsum.photos/200'
    }])
  }

  return (
    <>
      <Typography variant="h1">React Store</Typography>
      <Catalog product = {products} addProduct = {addProduct} />
    </>
  );
}

export default App;
