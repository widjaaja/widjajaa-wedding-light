import React from 'react';
import { render } from '@testing-library/react';
import Wish from './Wish';

test('renders', () => {
  render(<Wish name={'Wish'} />);
});