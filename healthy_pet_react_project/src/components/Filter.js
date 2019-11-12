import React, { useState } from 'react'
import hamburgerMenu from "../img/hamburger-menu.png"
import axios from "axios";

const Filter = (props) => {

  const [categoryVal, setCategoryVal] = useState("all");
  const [subCategoryVal, setSubCategoryVal] = useState("all");
  const [sortBy, setSortBy] = useState("all");
  const [showFilter, setShowFilter] = useState(false);
  window.addEventListener("resize", function() {
    if(window.innerWidth >= 700) {
      setShowFilter(false);
    }
  });

  const handleHamburger = () => {

    setShowFilter(!showFilter);
    
  }

  const handleCategoryChange = (e) => {
    setCategoryVal(e.target.value);

    if(e.target.value !== "all") {
      let filteredCategory = props.items.products.filter(product => {
        return product.category === e.target.value;
      })
      props.handleItems({isloading: false, products: filteredCategory})
    }
  }

  const handleSubCategoryChange = (e) => {
    setSubCategoryVal(e.target.value);

    if(e.target.value !== "all") {
      let filteredSubCategory = props.items.products.filter(product => {
        return product.subCategory === e.target.value;
      })
      props.handleItems({isloading: false, products: filteredSubCategory})
    }
  }

  const handleSortByChange = (e) => {
    if(e.target.value === "highest") {
      const highestFirst = props.items.products.sort((a, b) => {
        return b.price - a.price;
      })
      props.handleItems({isloading: false, products: highestFirst})
    } else if (e.target.value === "lowest") {
      const lowestFirst = props.items.products.sort((a, b) => {
        return a.price - b.price;
      })
      props.handleItems({isloading: false, products: lowestFirst})
    }
  }

  const numCategories = {};

  props.items.products.forEach(item => {
    if(item.category) {
      if(numCategories[item.category]) {
        numCategories[item.category] = true;
      } else {
        numCategories[item.category] = true;
      }
    }
  })

  const categories = Object.keys(numCategories).map((item, index)=> {
    return (
    <option key={index}>
      {item}
    </option>
    )
  })

  const numSubCategories = {};

  props.items.products.forEach(item => {
    if(item.subCategory) {
      if(numSubCategories[item.subCategory]) {
        numSubCategories[item.subCategory] = true;
      } else {
        numSubCategories[item.subCategory] = true;
      }
    }
  })

  const subCategories = Object.keys(numSubCategories).map((item, index)=> {
    return (
    <option key={index}>
      {item}
    </option>
    )
  })

  const handleReset = (e) => {
    e.preventDefault();
    setCategoryVal("all")
    setSubCategoryVal("all")
    setSortBy("all")
    axios.get("http://localhost:3001/products")
      .then(res => {
        props.handleItems({isLoading: false, products: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="container">
      <div className="filter">
        <img src={hamburgerMenu} alt="hamburger menu" onClick={handleHamburger}/>
        <div className="filter-option">
          <select name="categories" id="categories" value={categoryVal} onChange={handleCategoryChange}>
            <option value="all">
              {Object.keys(numCategories).length} categories selected
            </option>
            {categories}
          </select>
          <select name="sub-categories" id="sub-categories" value={subCategoryVal} onChange={handleSubCategoryChange}>
            <option value="all">
              {Object.keys(numCategories).length} subcategories selected
            </option>
            {subCategories}
          </select>
          <select name="sort-by" value={sortBy} id="sort-by" onChange={handleSortByChange}>
            <option>
              Sorted By
            </option>
            <option value="highest">
              Price Highest
            </option>
            <option value="lowest">
              Price Lowest
            </option>
          </select>
          <button onClick={handleReset}>Reset</button>
        </div>
        <p><strong>{props.items.products.length}</strong> products</p>
      </div>

    { showFilter ? (
    <div className="filter-option-hamburger">
          <select name="categories" id="categories" value={categoryVal} onChange={handleCategoryChange}>
            <option value="all">
              {Object.keys(numCategories).length} categories selected
            </option>
            {categories}
          </select>
          <select name="sub-categories" id="sub-categories" value={subCategoryVal} onChange={handleSubCategoryChange}>
            <option value="all">
              {Object.keys(numCategories).length} subcategories selected
            </option>
            {subCategories}
          </select>
          <select name="sort-by" value={sortBy} id="sort-by" onChange={handleSortByChange}>
            <option>
              Sorted By
            </option>
            <option value="highest">
              Price Highest
            </option>
            <option value="lowest">
              Price Lowest
            </option>
          </select>
          <button onClick={handleReset}>Reset</button>
        </div>
    ) : null}
    </div>
  )
}

export default Filter;