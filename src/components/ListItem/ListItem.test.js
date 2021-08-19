import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ListItem from './ListItem';

jest.mock('@material-ui/core', () => ({
  ...jest.requireActual('@material-ui/core'),
  Avatar: (props) => <div {...props} />,
}));

const defaultProps = {
  src: 'PROP-src',
  text: 'PROP-text',
  to: '/Link',
};

const setup = (overrides) => {
  const props = {
    ...defaultProps,
    ...overrides,
  };
  return {
    ...render(
      <Router>
        <ListItem {...props} />
      </Router>,
    ),
    props,
  };
};

describe('ListItem', () => {
  it('Should render ListItem', () => {
    const { getByText, props } = setup();

    expect(getByText(props.text)).toBeInTheDocument();
  });

  it('Should render ListItem with appropriate avatar', () => {
    const { getByTestId, props } = setup();

    expect(getByTestId('Comp-ListItem-Avatar')).toHaveAttribute(
      'src',
      props.src,
    );
  });
});
