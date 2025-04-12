import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoProvider } from './components/context/TodoContext';
import HomePage from './components/pages/HomePage';
import AddTodoPage from './components/pages/AddTodoPage';
import EditTodoPage from './components/pages/EditTodoPage';
import './App.css';


function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTodoPage />} />
          <Route path="/edit/:id" element={<EditTodoPage />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
