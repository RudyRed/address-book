import { render } from '@testing-library/react';
import { Typography } from '@material-ui/core';

import Layout from './Layout';

const childrenText = 'Layout-children-text';
const defaultProps = {
  children: <Typography>{childrenText}</Typography>,
  title: 'Layout-title',
};

const setup = (overrides) => {
  const props = {
    ...defaultProps,
    ...overrides,
  };
  return {
    ...render(<Layout {...props} />),
    props,
  };
};

describe('Layout', () => {
  it('Should render Layout', () => {
    const { getByText, props } = setup();

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(childrenText)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
