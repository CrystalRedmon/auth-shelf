
import AddItemForm from '../AddItemForm/AddItemForm'; 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom'

function ShelfPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const shelfItems = useSelector(store => store.items);
  console.log('shelf items are', shelfItems);
  // console.log(shelfItems);

  useEffect(() => {
    dispatch({
      type: "FETCH_ITEMS",
    })
  }, []);


  const deleteItem = (id) => {
    console.log('in delete item function onclick')
    dispatch({
      type: "DELETE_ITEM",
      payload: id
    })
  }




  return (
    <div className="container">

      <AddItemForm></AddItemForm>
      
      <h2>Shelf</h2>
      <ul>{shelfItems.map(item => (
        <li key={item.id}>
          {item.description}<br></br>
          {item.image_url}
          <button onClick = {() => deleteItem(item.id)}>Delete</button>
        </li>))}
      </ul>
    </div>
  );
}

export default ShelfPage;
