
import AddItemForm from '../AddItemForm/AddItemForm'; 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function ShelfPage() {
  const dispatch = useDispatch();
  const shelfItems = useSelector(store => store.items);
  console.log('shelf items are', shelfItems);

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

      <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
      {shelfItems.map(item => (
         <Grid item xs={12} sm={6} md={3} key = {item.id}>
        <Card sx = {{maxWidth: 345, height: 350, border: 1, boxShadow: 5}} >
            <CardMedia 
            component="img"
            height="140"
            image={item.image_url}
            alt={item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
            </CardContent>
                <CardActions>
                    <Button size = "small" variant = "outlined" startIcon={<DeleteIcon />} onClick = {() => deleteItem(item.id)}>
                      Delete
                    </Button>
                </CardActions>
          </Card>
          </Grid>))}
          </Grid>
  
    </div>
  );
}

export default ShelfPage;

