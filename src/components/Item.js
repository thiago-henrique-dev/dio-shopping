import React from 'react'
import { List, ListItem, ListItemText} from '@material-ui/core/';

const Item = (props) => {
    return (
        
        <ListItem>
          <ListItemText
                primary={props.itemName}
                secondary={props.itemDetails}
          />
        </ListItem>
      
      
    )
}

export default Item;