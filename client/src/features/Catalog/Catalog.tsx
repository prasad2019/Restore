import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/Product"

interface Props{
    product : Product[];
    addProduct : () => void;
}

export default function Catalog ({product, addProduct} : Props){
    return (
    <>
      <List>
        {product.map(product => (
          <ListItem key = {product.id}>
            <ListItemAvatar> 
              <Avatar src= {product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </>
    )
      
}