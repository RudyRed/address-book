import { render } from '@testing-library/react';

import ListItem from './ListItem';

const defaultProps = {
  text: 'PROP-text',
};

const setup = (overrides) => {
  const props = {
    ...defaultProps,
    ...overrides,
  };
  return {
    ...render(<ListItem {...props} />),
    props,
  };
};

describe('ListItem', () => {
  it('Should render ListItem', () => {
    const { getByText, props } = setup();

    expect(getByText(props.text)).toBeInTheDocument();
  });
});
