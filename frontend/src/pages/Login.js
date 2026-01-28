import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})} />

      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;
