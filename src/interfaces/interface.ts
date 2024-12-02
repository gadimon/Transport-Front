export interface IUser{
  [x: string]: any;
  name: string;
  email: string;
  password: string;
  role: "driver" | "admin" | "passenger";
}

export interface IBus{
  licensePlate: string;
  busModel: string;
  capacity: number;
  status: "service" | "out of service" | "maintenance";
  driverID: string;
  routeID: string;
}

export interface ILine{
  lineNumber: string;
  name: string;
  stations: string[];
  schedule: { departureTime: string; arrivalTime: string; station: string }[];
}

