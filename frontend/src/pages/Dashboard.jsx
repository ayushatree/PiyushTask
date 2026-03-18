import { useEffect, useState } from "react";
import API from "../utils/api";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleSubmit = async (form) => {
    if (editTask) await API.put(`/tasks/${editTask._id}`, form);
    else await API.post("/tasks", form);
    setOpen(false);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <button onClick={()=>setOpen(true)}>Add Task</button>
      {tasks.map(t => (
        <TaskCard key={t._id} task={t} onEdit={(t)=>{setEditTask(t);setOpen(true)}} onDelete={handleDelete} />
      ))}
      <TaskModal isOpen={open} onClose={()=>setOpen(false)} onSubmit={handleSubmit} initialData={editTask} />
    </div>
  );
}