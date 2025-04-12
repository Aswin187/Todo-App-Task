import { useState } from 'react';

const TodoForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    status: initialData.status || 'pending'
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In-progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoForm;
