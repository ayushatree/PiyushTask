import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <h1>TaskFlow</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}