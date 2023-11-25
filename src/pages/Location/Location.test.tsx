import React from 'react';
import { render } from '@testing-library/react';
import Location from './Location';

test('renders', () => {
  render(<Location name={'Location'} />);
});