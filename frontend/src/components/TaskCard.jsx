export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            task.status === "done"
              ? "bg-green-100 text-green-600"
              : task.status === "in_progress"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {task.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-2">{task.description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xs text-gray-400">
          Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-500 text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="text-red-500 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}