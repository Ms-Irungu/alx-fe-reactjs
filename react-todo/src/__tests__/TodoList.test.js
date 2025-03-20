import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the todo list with heading', () => {
    render(<TodoList />);
    const heading = screen.getByText('Todo List');
    expect(heading).toBeInTheDocument();
  });

  test('adds a new todo when text is entered and Enter key is pressed', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/Add a new todo/i);
    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const newTodo = screen.getByText(/Learn Testing/i);
    expect(newTodo).toBeInTheDocument();
  });

  test('toggle a todo as completed', () => {
    render(<TodoList />);

    const toggleButton = screen.getByText(/Complete/i);
    fireEvent.click(toggleButton);

    const todoItem = screen.getByText(/Learn React/i);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('delete a todo', () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText(/Delete/i)[0];
    fireEvent.click(deleteButton);

    const deletedTodo = screen.queryByText(/Learn React/i);
    expect(deletedTodo).not.toBeInTheDocument();
  });
});