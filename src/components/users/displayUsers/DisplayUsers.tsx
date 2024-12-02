import { useEffect, useState } from "react";
import { IUser } from "../../../interfaces/interface";
import { Link } from "react-router-dom";

const DisplayUsers = () => {
  const [data, setData] = useState<IUser[] | null>(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8787/users", {
        credentials: "include",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`error from user ${errorData.error.message}`);
      }
      const userData = await res.json();
      setData(userData);
    } catch (error) {
      console.error("can't to fetch", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [data]);

  if (data) {
    return (
      <>
        <div>
          {data.map((user, index) => (
            <div key={index}>
              <div>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                <button
                  style={{
                    padding: "10px",
                    background: "#db9f70",
                    color: "black",
                  }}
                >
                  <Link to={"/users/addUser"}>Add user</Link>
                </button>
                <button
                  style={{
                    padding: "10px",
                    background: "#db9f70",
                    color: "black",
                  }}
                >
                  <Link to={"/users/deleteUser"}>Delete </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default DisplayUsers;
