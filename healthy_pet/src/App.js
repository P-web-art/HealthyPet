import React from 'react';
import './App.css';
import Header from "./components/Header";
import Filter from "./components/Filter";
import ItemsList from "./components/ItemsList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Filter />
      <ItemsList />
    </div>
  );
}

export default App;