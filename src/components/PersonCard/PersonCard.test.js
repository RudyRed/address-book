import { render } from '@testing-library/react';

import PersonCard from './PersonCard';

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
    ...render(<PersonCard {...props} />),
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
