import T from 'prop-types';
import { Paper, List as MuiList } from '@material-ui/core';
import ListItem from '../ListItem';

const List = ({ data }) => {
  return (
    <Paper elevation={4}>
      <MuiList>
        {data.map(({ img, text }, i) => (
          <ListItem
            src={img}
            text={text}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            to={`/${i}`}
            data-testid="List-ListItems"
          />
        ))}
      </MuiList>
    </Paper>
  );
};

List.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: T.array,
};

export default List;
