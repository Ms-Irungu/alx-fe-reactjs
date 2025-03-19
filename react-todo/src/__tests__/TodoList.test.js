import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(5);
  });
  
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(4);
  });
  
  test('toggles a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Complete'));
    const completedTodo = screen.getByText('Learn React', { selector: 'span' });
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
  });
  
  test('deletes a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Delete'));
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
  });