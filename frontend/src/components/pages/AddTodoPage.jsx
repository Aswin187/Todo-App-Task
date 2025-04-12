import TodoForm from '../TodoForm';
import { useNavigate } from 'react-router-dom';
import API from '../../api';
import { useTodos } from '../context/TodoContext';
import '../styles/AddTodoPage.css';

const AddTodoPage = () => {
  const navigate = useNavigate();
  const { fetchTodos } = useTodos();

  const handleAdd = async (data) => {
    try {
      await API.post('/', data);
      fetchTodos();
      navigate('/');
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="todo-form-container">
      <h2>Add Todo</h2>
      <TodoForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddTodoPage;
