import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    const form = new FormData(e.target)
    e.preventDefault();
    const res = await fetch('http://localhost:9999/api/auth/register', {
      method: 'POST',
      body: form
    })
    if (res.ok) {
      navigate('/login')
      setError(false)
    }else{
      setError(true)
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
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
          <Link to={"/login"}>Login</Link>
          <p>{error && "There is this email ready"}</p>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
