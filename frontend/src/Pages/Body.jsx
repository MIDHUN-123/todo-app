import React, { useEffect, useState } from 'react';
import { FaSlidersH, FaListUl, FaTrashAlt } from 'react-icons/fa';
import FilterTab from '../components/FilterTab';
import TodoList from '../components/TodoList';
import './Body.css';

const Body = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/todos');
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddOrUpdateTodo = async () => {
    if (!title.trim()) {
      alert('Please enter a todo');
      return;
    }

    if (editingId) {
      // --- Update (Edit) Mode ---
      try {
        const response = await fetch(`http://localhost:3000/api/todos/${editingId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: title }),
        });

        if (!response.ok) throw new Error('Failed to update todo');

        setTodos((prev) =>
          prev.map((t) =>
            (t.id === editingId || t._id === editingId) ? { ...t, text: title } : t
          )
        );
        setEditingId(null);
        setTitle('');
      } catch (error) {
        console.log(error);
        alert('Could not update todo.');
      }
    } else {
    
      try {
        const response = await fetch('http://localhost:3000/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: title }),
        });

        if (!response.ok) throw new Error('Failed to add todo');

        const newTodo = await response.json();
        setTodos((prev) => [...prev, newTodo]);
        setTitle('');
        alert('Todo added successfully');
      } catch (error) {
        console.log(error);
        alert('Not added todo. Check your API');
      }
    }
  };

  const handletoggle = async (id, currentStatus) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id || t._id === id ? { ...t, completed: !t.completed } : t
      )
    );

    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !currentStatus }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id && t._id !== id));
    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (todo) => {
    const id = todo.id || todo._id;
    setEditingId(id);
    setTitle(todo.text || todo.title || '');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle('');
  };

  const handleClearAll = async () => {
    // Clear completed or all items locally
    const remaining = todos.filter((t) => !t.completed);
    setTodos(remaining);
  };

  // Counts for the bottom status bar
  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="border">
      <div className="body-border">
        {/* Heading */}
        <div className="body-title">
          <p className="body-heading">
            {editingId ? 'Edit todo' : 'Add a new todo'}
          </p>
        </div>

        {/* Input and Add/Update Button */}
        <div className="body-add">
          <div className="input-box">
            <FaSlidersH className="input-icon" />
            <input
              className="text-place"
              type="text"
              placeholder={editingId ? 'Update your task...' : 'What do you want to do?'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddOrUpdateTodo()}
            />
          </div>

          <button className="add-button" onClick={handleAddOrUpdateTodo}>
            <span className="plus-icon">{editingId ? '✓' : '+'}</span>
            {editingId ? 'Update' : 'Add'}
          </button>

          {editingId && (
            <button
              className="add-button"
              style={{ backgroundColor: '#334155' }}
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          )}
        </div>

        {/* Filter Badges */}
        <FilterTab todos={todos} filter={filter} setFilter={setFilter} />

        {/* Todo Items */}
        <TodoList
          todos={filteredTodos}
          onToggle={handletoggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />

        {/* Bottom Status Bar */}
        <div className="list-footer">
          <div className="footer-counts">
            <span className="green-stat">
              <FaListUl className="stat-icon" /> {completedCount} completed
            </span>
            <span className="stat-divider">|</span>
            <span className="gray-stat">{activeCount} remaining</span>
          </div>
          <button className="clear-btn" onClick={handleClearAll}>
            <FaTrashAlt className="stat-icon" /> Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;