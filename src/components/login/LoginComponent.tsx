import React, { useState } from "react";
import styles from './login.module.css'
import { useNavigate } from "react-router-dom";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "driver" | "admin" | "passenger";
}

const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);
  const [data, setData] = useState<null>(null);
  const [token, setToken] = useState<null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const loginFetch = async (body: object) => {  
    try {
      const response = await fetch("http://localhost:8787/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(body),
        });
        
        if (!response.ok) {
          return false;
        }
      const data = await response.json();    
      if (data && data.token) {
        setData(data);
        setToken(data.token);
        return data;
      }
      return false;
    } catch (error) {
      console.error("Not able to fetch", error);
    }
  };
  const heandleSubmit = async (event: React.FormEvent) => {
    
    event.preventDefault();
    if (login) {
      try {
        const res = await loginFetch({ email, password });
        setUser(res);
        setLogin(true);
      } catch (error) {
        console.error("Failed to login ", error);
      }
    }
    navigate('/route')
    setLogin(false);

  };

  return (
    <>
      <div>
        <form onSubmit={heandleSubmit}>
          <label htmlFor="email">Email</label>
          <input
          className={styles.input}
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <button
            type="submit">
                Login                
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
