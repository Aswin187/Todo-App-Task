import { createContext, useContext, useEffect, useState } from 'react';
import API from '../../api';

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await API.get('/');
      setTodos(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, fetchTodos, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
};
