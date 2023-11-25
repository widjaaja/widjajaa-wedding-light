import React from 'react';
import { render } from '@testing-library/react';
import MyComponentTest from './MyComponentTest';

test('renders', () => {
  render(<MyComponentTest />);
});