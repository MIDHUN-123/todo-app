import React from 'react';
import { FaCheck, FaCalendarAlt, FaPen, FaTrashAlt } from 'react-icons/fa';
import './TodoList.css';

const TodoList = ({ todos = [], onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="todo-empty">
        <p>No tasks found in this view.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id || todo._id} className="todo-item">
          {/* Custom Rounded Checkbox */}
          <button
            type="button"
            className={`check-box ${todo.completed ? 'checked' : ''}`}
            onClick={() => onToggle && onToggle(todo.id || todo._id, todo.completed)}
            aria-label="Toggle task status"
          >
            {todo.completed && <FaCheck className="check-check" />}
          </button>

          {/* Task Title & Date */}
          <div className="todo-content">
            <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
              {todo.text || todo.title}
            </span>
            <span className="todo-date">
              <FaCalendarAlt className="date-icon" /> {todo.date || 'Today'}
            </span>
          </div>

          {/* Status Badge */}
          <span className={`status-pill ${todo.completed ? 'pill-completed' : 'pill-active'}`}>
            {todo.completed ? 'Completed' : 'Active'}
          </span>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              type="button"
              className="action-btn edit-btn"
              onClick={() => onEdit && onEdit(todo)}
              title="Edit Task"
            >
              <FaPen />
            </button>
            <button
              type="button"
              className="action-btn delete-btn"
              onClick={() => onDelete && onDelete(todo.id || todo._id)}
              title="Delete Task"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;