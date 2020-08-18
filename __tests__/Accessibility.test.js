import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup } from '@testing-library/react';
import Component from '../pages/index';

afterEach(cleanup);
expect.extend(toHaveNoViolations)

it('should not have basic accessibility issues', async () => {
  const { container } = render(<Component />);

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
