import { describe, it, expect, vi, assert } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ToDoMain from './index.tsx';

describe('ToDoComp Tests', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<ToDoMain />);
    console.log(getByPlaceholderText);
    assert(getByPlaceholderText('Search tasks...')).toBeInTheDocument();
    // Add more assertions as needed
  });

  it('initializes state variables correctly', () => {
    const { getByText } = render(<ToDoMain />);
    // Assuming you have a way to display these state variables in the UI,
    // you can check their initial values.
    expect(getByText('Priority: undefined')).toBeInTheDocument();
    // Add more checks for other state variables
  });
  
});
