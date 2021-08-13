import T from 'prop-types';
import {
  Avatar,
  ListItem as MuiListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';

const ListItem = ({ src, text }) => {
  return (
    <MuiListItem>
      <ListItemAvatar>
        <Avatar data-testid="Comp-ListItem-Avatar" src={src} />
      </ListItemAvatar>
      <ListItemText primary={text} />
    </MuiListItem>
  );
};

ListItem.propTypes = {
  src: T.string.isRequired,
  text: T.string.isRequired,
};

export default ListItem;
