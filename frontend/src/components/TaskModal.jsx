import { useState, useEffect } from "react";

export default function TaskModal({ isOpen, onClose, onSubmit, initialData }) {
  const [form, setForm] = useState({ title: "", description: "", status: "pending" });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4">
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title:e.target.value})} />
        <input placeholder="Description" value={form.description} onChange={e => setForm({...form, description:e.target.value})} />
        <select value={form.status} onChange={e => setForm({...form, status:e.target.value})}>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button onClick={() => onSubmit(form)}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}