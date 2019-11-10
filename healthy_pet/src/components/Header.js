import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
      <div className="container">
        <ul>
          <div className="logo">
            <img src="#" alt="logo"/>
            <p>EntirelyPets</p>
          </div>
          <div className="search-bar">
            <input type="text"/>
            <button>button</button>
          </div>
          <div className="message-cart">
            <img src="#" alt="message"/>
            <img src="#" alt="cart"/>
          </div>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
