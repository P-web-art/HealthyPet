import React from 'react'
import Item from "./Item";

const ItemsList = (props) => {

  const items = props.items.products.map(item => {
    return <Item item={item} key={item.id}/>
  })

  return (
    <div className="container">
      <div className="items">
        {items}
      </div>
    </div>
  )
}

export default ItemsList;