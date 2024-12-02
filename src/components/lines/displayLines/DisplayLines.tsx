import React, { useEffect, useState } from "react";
import { ILine } from "../../../interfaces/interface";
import styles from "./DisplayLines.module.css";

const DisplayLines = () => {
  const [data, setData] = useState<ILine[] | null>(null);
  const fetchLines = async () => {
    try {
      const res = await fetch("http://localhost:8787/lines", {
        credentials: "include",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`error from user ${errorData.error.message}`);
      }
      const lineData = await res.json();
      setData(lineData);
    } catch (error) {
      console.error("can't to fetch", error);
    }
  };

  useEffect(() => {
    fetchLines();
  }, [data]);

  if (data) {
    return (
      <>
        <div>
          {data.map((line, index) => (
            <div key={index} className={styles.DisplayLines}>
              <table>
                <tr>
                  <th>Name</th>
                  <th>LineNumber</th>
                  <th>Stations</th>
                  <th>DepartureTime</th>
                  <th>ArrivalTime</th>
                  <th>Station</th>
                </tr>
                <tr>
                  <td>{line.name}</td>
                  <td>{line.lineNumber}</td>
                  <td>{line.stations}</td>
                  {line.schedule.map((s, index) => (
                    <div key={index}>
                      <td>{s.arrivalTime}</td>
                      <td>{s.departureTime}</td>
                      <td>{s.station}</td>
                    </div>
                  ))}
                </tr>
              </table>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default DisplayLines;
