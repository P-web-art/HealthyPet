import React from 'react'
import dogImage from "../img/dog_img.jpeg"

const Item = (props) => {
  console.log("from item",props)
  return (
    <div className="item">
      <div>
        <div>{props.item.name}</div>
      </div>
      <p>Product {props.item.name}</p>
      <button>${props.item.price}</button>
    </div>
  )
}

export default Item;