import { act, fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import List from './List';
import PersonContext from '../PersonContext';

jest.mock('@material-ui/core', () => ({
  ...jest.requireActual('@material-ui/core'),
  Avatar: (props) => <div {...props} />,
}));

const makeData = (num) => {
  return Array(num)
    .fill(0)
    .map((_, i) => ({
      thumbnail: `ListItem-src-${i}`,
      firstName: `ListItem-firstName-${i}`,
      lastName: `ListItem-lastName-${i}`,
    }));
};

const defaultProps = {
  data: makeData(4),
};

const setContextMock = jest.fn();

const setup = (overrides) => {
  const props = {
    ...defaultProps,
    ...overrides,
  };
  return {
    ...render(
      <Router>
        <PersonContext.Provider value={[{}, setContextMock]}>
          <List {...props} />,
        </PersonContext.Provider>
      </Router>,
    ),
    props,
  };
};

describe('List', () => {
  it('Should render List', () => {
    const { getByText, props } = setup();

    props.data.forEach(({ firstName, lastName }) =>
      expect(getByText(`${firstName} ${lastName}`)).toBeInTheDocument(),
    );
  });

  it('onClick should fire with correct data when ListItem clicked', () => {
    const { getAllByTestId, props } = setup();
    const [listItem] = getAllByTestId('List-ListItems');

    act(() => {
      fireEvent.click(listItem);
    });

    expect(setContextMock).toBeCalledWith(props.data[0]);
  });
});
