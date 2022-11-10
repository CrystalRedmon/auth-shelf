import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm'; 

function ShelfPage() {
  return (
    <div className="container">

      <AddItemForm></AddItemForm>
      
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
