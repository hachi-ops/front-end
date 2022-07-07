import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function ItemsList() {
  const [searchItems, setSearchItems] = useSearchParams()
  const showAvailableItems = searchItems.get('filter') === 'available'
  return (
    <>
      <div>ProductsList</div>
      <div>Product1</div>
      <div>Product2</div>
      <div>Product3</div>
      <Outlet />
      <div>
        <button onClick={() => setSearchItems({ filter: 'available' })}>
          Available items
        </button>
        <button onClick={() => setSearchItems({})}>All items</button>
      </div>
      {showAvailableItems ? (
        <p>showing available items</p>
      ) : (
        <p>showing all items</p>
      )}
    </>
  )
}

export default ItemsList
