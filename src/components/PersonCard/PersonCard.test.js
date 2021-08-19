import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import PersonCard from './PersonCard';

jest.mock('@material-ui/core', () => ({
  ...jest.requireActual('@material-ui/core'),
  Avatar: (props) => <div {...props} />,
}));

const defaultProps = {
  firstName: 'PersonCard-firstName',
  lastName: 'PersonCard-lastName',
  phoneNumber: 'PersonCard-phoneNumber',
};

const setup = (overrides) => {
  const props = {
    ...defaultProps,
    ...overrides,
  };
  return {
    ...render(
      <Router>
        <PersonCard {...props} />,
      </Router>,
    ),
    props,
  };
};

describe('PersonCard', () => {
  it('Should render PersonCard', () => {
    const { getByText, props } = setup();

    expect(getByText(props.firstName)).toBeInTheDocument();
    expect(getByText(props.lastName)).toBeInTheDocument();
    expect(getByText(props.phoneNumber)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
