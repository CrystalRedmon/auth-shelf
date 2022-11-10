import {useState} from 'react';


function AddItemForm(){
    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        image_url: ''
    })


    function addDescription(event){
        event.preventDefault();
        setNewItem({
            ...newItem,
            description: event.target.value
        });
        console.log('newItem: ', newItem);
    }

    function addName(event){
        event.preventDefault();
        setNewItem({
            ...newItem,
            name: event.target.value
        });
        console.log('newItem: ', newItem);
    }
    function addImageURL(event){
        event.preventDefault();
        setNewItem({
            ...newItem,
            image_url: event.target.value
        });
        console.log('newItem: ', newItem);
    }




    function handleSubmit(event){
        event.preventDefault();

        
    }

    return(<>
        <h1>Add an Item</h1>

        <form onSubmit={handleSubmit}>
        <input
        onChange={addDescription}
        placeholder="Description"
        type="text" />

        <input
        onChange={addName}
        placeholder="name"
        type="text" />

        <input 
        type="text"
        onChange={addImageURL}
        placeholder="Image URL" />

        <button type="submit"></button>
        </form>

    </>)
}

export default AddItemForm;