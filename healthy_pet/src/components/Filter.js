import React from 'react'

const Filter = () => {
  return (
    <div className="container">
      <div className="filter">
        <div className="filter-option">
          <select name="categories" id="categories"></select>
          <select name="sub-categories" id="sub-categories"></select>
          <select name="sort-by" id="sort-by"></select>
          <button>reset</button>
        </div>
        <p>113 products</p>
      </div>
    </div>
  )
}

export default Filter;