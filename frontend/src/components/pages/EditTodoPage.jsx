import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import TodoForm from '../TodoForm';
import API from '../../api';
import { useTodos } from '../context/TodoContext';
import "../styles/EditTodo.css";

const EditTodoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchTodos } = useTodos();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    API.get(`/${id}`).then(res => setTodo(res.data));
  }, [id]);

  const handleEdit = async (data) => {
    await API.put(`/${id}`, data);
    fetchTodos();
    navigate('/');
  };

  return todo ? (
    <TodoForm initialData={todo} onSubmit={handleEdit} />
  ) : (
    <div className="loading-container">Loading...</div>
  );
};

export default EditTodoPage;
