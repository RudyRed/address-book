import { render } from '@testing-library/react';

import List from './List';

jest.mock('@material-ui/core', () => ({
  ...jest.requireActual('@material-ui/core'),
  Avatar: (props) => <div {...props} />,
}));

const makeData = (num) => {
  return Array(num)
    .fill(0)
    .map((_, i) => ({
      src: `ListItem-src-${i}`,
      text: `ListItem-text-${i}`,
    }));
};

const defaultProps = {
  data: makeData(4),
};

const setup = (overrides) => {
  const props = {
    ...defaultProps,
    ...overrides,
  };
  return {
    ...render(<List {...props} />),
    props,
  };
};

describe('List', () => {
  it('Should render List', () => {
    const { getByText, props } = setup();

    props.data.forEach(({ text }) =>
      expect(getByText(text)).toBeInTheDocument(),
    );
  });
});
