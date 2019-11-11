import React, {useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Filter from "./components/Filter";
import ItemsList from "./components/ItemsList";
import axios from "axios";

const App = () => {

  const [items, handleItems] = useState({ isLoading: true, products: [] })

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then(res => {
        console.log(res.data)
        handleItems({isLoading: false, products: res.data})
      })
  }, [])

  return (
    <div className="app">
      <Header />
      <Filter />
      <ItemsList items={items}/>
    </div>
  );
}

export default App;