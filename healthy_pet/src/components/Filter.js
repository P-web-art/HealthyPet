import React from 'react'
import hamburgerMenu from "../img/hamburger-menu.png"

const Filter = () => {
  return (
    <div className="container">
      <div className="filter">
        <img src={hamburgerMenu} alt="hamburger menu"/>
        <div className="filter-option">
          <p>Dog Cat</p>
          <select name="categories" id="categories">
            <option>
              3 categories selected
            </option>
            <option>
              test 1
            </option>
            <option>
              test 1
            </option>
          </select>
          <select name="sub-categories" id="sub-categories">
            <option>
              0 subcategories selected
            </option>
            <option>
              test 1
            </option>
            <option>
              test 1
            </option>
          </select>
          <select name="sort-by" id="sort-by">
            <option>
              Sorted By
            </option>
            <option>
              test 1
            </option>
            <option>
              test 1
            </option>
          </select>
          <button>Reset</button>
        </div>
        <p><strong>113</strong> products</p>
      </div>
    </div>
  )
}

export default Filter;