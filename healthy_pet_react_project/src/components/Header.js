import React, { useState } from "react";
import healthy_logo from "../img/entirely_pets.png";
import shopping_message from "../img/shopping-message.png";
import search_icon from "../img/search_icon.png";
import axios from "axios";

const Header = (props) => {

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3001/products?q=" + searchInput)
      .then(res => {
        props.handleItems({isloading: false, products: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <header>
      <nav>
      <div className="container">
        <ul>
          <div className="logo">
            <img src={healthy_logo} alt="logo"/>
          </div>
          <div className="search-bar">
            <form onSubmit={handleSubmit}>
              <input type="text" required placeholder="Search all of Entirely Pets" onChange={handleChange} value={searchInput}/>
              <button><img src={search_icon} alt="test"/></button>
            </form>
          </div>
          <div className="message-cart">
            <img src={shopping_message} alt="search"/>
          </div>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
