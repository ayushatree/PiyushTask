import { useState } from "react";
import API from "../utils/api";

export default function Register() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const handleRegister = async () => {
    await API.post("/auth/register", form);
  };

  return (
    <div>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
