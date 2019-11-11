import React from 'react'
import Item from "./Item";

const ItemsList = (props) => {

  const items = props.items.products.map(item => {
    console.log(item)
    return <Item item={item} key={item.id}/>
  })

  console.log(items)

  return (
    <div className="container">
      <div className="items">
        {/* <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item /> */}
        {items}
      </div>
    </div>
  )
}

export default ItemsList;