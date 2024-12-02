import React, { useState } from "react";
import styles from './NewUser.module.css'
import { useNavigate } from "react-router-dom";

export enum Role {
  DRIVER = "driver",
  ADMIN = "admin",
  PASSENGER = "passenger",
}

const NewUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>(Role.ADMIN);

  const register = async (
    name: string,
    email: string,
    password: string,
    role: Role
  ): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:8787/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("register failed", error);
      return false;
    }
  };

  const heandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(name, email, password, role)
    navigate('/users')
  };
  return(
  <>
    <div>
        <form onSubmit={heandleSubmit} className={styles.form}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                id="name"
                type="text"
                value={name}
                placeholder="Please enter your name"
                onChange={(event) => {
                    setName(event.target.value)
                }} />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="text"
                value={email}
                placeholder="Please enter your email"
                onChange={(event) => {
                    setEmail(event.target.value)
                }} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                id="password"
                type="text"
                value={password}
                placeholder="Please enter your password"
                onChange={(event) => {
                    setPassword(event.target.value)
                }} />
            </div>

            <div>
                <label htmlFor="role">Role</label>
                <select
                 name="role"
                 id="role" 
                 value={role}
                 onChange={(event) => {
                    setRole(event.target.value as Role)
                }}
                 >
                    <option value="driver">Driver</option>
                    <option value="admin">Admin</option>
                    <option value="passenger">Passenger</option>
                 </select>
            </div>
            <button type="submit">Add New User</button>
        </form>
    </div>
  </>
  ) 
};

export default NewUser;
