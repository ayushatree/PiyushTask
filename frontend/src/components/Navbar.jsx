export default function Navbar({ user, onLogout }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold tracking-wide">TaskFlow 🚀</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">Hi, {user?.name}</span>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-lg text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}