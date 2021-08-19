import {
  Avatar,
  ListItem as MuiListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const ListItem = ({ src, text, ...props }) => {
  return (
    <MuiListItem button component={Link} {...props}>
      <ListItemAvatar>
        <Avatar data-testid="Comp-ListItem-Avatar" src={src} />
      </ListItemAvatar>
      <ListItemText primary={text} />
    </MuiListItem>
  );
};

export default ListItem;
