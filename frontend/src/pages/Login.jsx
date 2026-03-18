import { useState } from "react";
import API from "../utils/api";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/authSlice";

export default function Login() {
  const [form, setForm] = useState({ email:"", password:"" });
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const { data } = await API.post("/auth/login", form);
    dispatch(setAuth(data));
  };

  return (
    <div>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}