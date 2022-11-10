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
      <h2>Shelf</h2>
      <ul>{shelfItems.map(item => (
        <li key={item.id}>
          <li>{item.description}</li><br></br>
          <li>{item.image_url}</li></li>))}
          
      </ul>
    </div>
  );
}

export default ShelfPage;
