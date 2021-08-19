import { useContext } from 'react';
import { Paper, List as MuiList } from '@material-ui/core';
import ListItem from '../ListItem';
import PersonContext from '../PersonContext';

const List = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setPerson] = useContext(PersonContext);

  const clickHandler = (index) => () => {
    setPerson(data[index]);
  };

  return (
    <Paper elevation={4}>
      <MuiList>
        {data.map(({ firstName, lastName, thumbnail }, i) => (
          <ListItem
            src={thumbnail}
            text={`${firstName} ${lastName}`}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            to="/details"
            onClick={clickHandler(i)}
            data-testid="List-ListItems"
          />
        ))}
      </MuiList>
    </Paper>
  );
};

export default List;
