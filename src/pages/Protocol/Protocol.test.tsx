import React from 'react';
import { render } from '@testing-library/react';
import Protocol from './Protocol';

test('renders', () => {
  render(<Protocol name={'Protocol'} />);
});