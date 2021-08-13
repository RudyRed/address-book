import T from 'prop-types';
import MuiListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

const ListItem = ({ text }) => {
  return (
    <MuiListItem>
      <ListItemText primary={text} />
    </MuiListItem>
  );
};

ListItem.propTypes = {
  text: T.string.isRequired,
};

export default ListItem;
