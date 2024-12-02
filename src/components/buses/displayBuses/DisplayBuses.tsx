import React, { useEffect, useState } from "react";
import { IBus } from "../../../interfaces/interface";

const DisplayBuses = () => {
  const [data, setData] = useState<IBus[] | null>(null);

  const fetchBuses = async () => {
    try {
      const res = await fetch("http://localhost:8787/buses", {
        credentials: "include",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`error from user ${errorData.error.message}`);
      }
      const busData = await res.json();
      setData(busData);
    } catch (error) {
      console.error("can't to fetch", error);
    }
  };
  useEffect(() => {
    fetchBuses();
  }, [data]);

  if (data) {
    return (
      <>
        <div>
          {data.map((bus, index) => (
            <div key={index}>
              <div>
                <p>LicensePlate: {bus.licensePlate}</p>
                <p>BusModel: {bus.busModel}</p>
                <p>Capacity: {bus.capacity}</p>
                <p>Status: {bus.status}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
export default DisplayBuses;
