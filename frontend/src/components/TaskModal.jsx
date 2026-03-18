import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">My Tasks</h2>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            + Add Task
          </button>
        </div>

        {/* FILTER */}
        <div className="flex gap-3 mb-6">
          {["all", "pending", "in_progress", "done"].map((status) => (
            <button
              key={status}
              className="px-3 py-1 bg-white rounded-full shadow text-sm"
            >
              {status}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* TaskCard map here */}
        </div>
      </div>
    </div>
  );
}