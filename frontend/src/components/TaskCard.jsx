export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="p-4 border rounded">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.status}</span>
      <div>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}