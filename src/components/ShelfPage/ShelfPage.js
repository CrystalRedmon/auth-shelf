
import AddItemForm from '../AddItemForm/AddItemForm'; 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

function ShelfPage() {
  const dispatch = useDispatch();
  const shelfItems = useSelector(store => store.items);
  // console.log(shelfItems);

  useEffect(() => {
    dispatch({
      type: "FETCH_ITEMS",
    })
  }, []);

  return (
    <div className="container">

      <AddItemForm></AddItemForm>
      
      <h2>Shelf</h2>
      <ul>{shelfItems.map(item => (
        <li key={item.id}>
          {item.description}<br></br>
          {item.image_url}</li>))}
          
      </ul>
    </div>
  );
}

export default ShelfPage;
