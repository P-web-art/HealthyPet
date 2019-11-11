import React from 'react'

const Item = (props) => {
  return (
    <div className="item">
      <div>
        <div>{props.item.name}</div>
      </div>
      <p>{props.item.name}</p>
      <button>${props.item.price}</button>
    </div>
  )
}

export default Item;