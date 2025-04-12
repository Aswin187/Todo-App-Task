import { useTodos } from '../context/TodoContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/HomePage.css';
import API from '../../api';

const HomePage = () => {
  const { todos, loading, error, fetchTodos } = useTodos();
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await API.delete(`/${deleteId}`);
      fetchTodos();
      setShowModal(false);
      setDeleteId(null);
    } catch (err) {
      alert('Error deleting todo: ' + err.message);
      setShowModal(false);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const filtered = filter === 'all' ? todos : todos.filter(todo => todo.status === filter);

  return (
    <div className="page-container">
      <h1>Todo List</h1>
      <Link to="/add" className="add-todo-link">Add Todo</Link>
      <br />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In-progress</option>
        <option value="completed">Completed</option>
      </select>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {filtered.map(todo => (
          <li key={todo._id}>
            <h3>{todo.title} ({todo.status})</h3>
            <p>{todo.description}</p>
            <Link to={`/edit/${todo._id}`}>Edit</Link>
            <button onClick={() => handleDeleteClick(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete this todo?</p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmDelete}>Yes</button>
              <button className="cancel-btn" onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
