import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../redux/UserSlice";

export const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const form = new FormData(e.target);
    e.preventDefault();
    const res = await fetch("http://localhost:9999/api/auth/login", {
      method: "POST",
      body: form,
    });
    if (res.ok) {
      const data = await res.json();
      const token = data.token;
      localStorage.setItem("token", token);
      dispatch(getUser({ name: data.name, email: data.email, _id: data._id }));
      setError(false);
      navigate("/home");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <Link to={"/register"}>Register</Link>
          <p>{error && "Password or Email is not correct"}</p>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
