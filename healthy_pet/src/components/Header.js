import React from "react";
import healthy_logo from "../img/entirely_pets.png";
import shopping_message from "../img/shopping-message.png";
import search_icon from "../img/search_icon.png";

const Header = () => {
  return (
    <header>
      <nav>
      <div className="container">
        <ul>
          <div className="logo">
            <img src={healthy_logo} alt="logo"/>
          </div>
          <div className="search-bar">
            <form>
              <input type="text" placeholder="Search all of Entirely Pets"/>
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
