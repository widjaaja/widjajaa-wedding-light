import React from 'react';
import { render } from '@testing-library/react';
import Gift from './Gift';

test('renders', () => {
  render(<Gift name={'Gift'} />);
});