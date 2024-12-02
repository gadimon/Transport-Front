import { Route, Routes } from "react-router-dom";
import DisplayUsers from "../components/users/displayUsers/DisplayUsers";
import DisplayBuses from "../components/buses/displayBuses/DisplayBuses";
import DisplayLines from "../components/lines/displayLines/DisplayLines";
import LoginComponent from "../components/login/LoginComponent";
import RoutePage from "../components/routePage/RoutePage";
import NewUser from "../components/users/newUser/NewUser";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginComponent />}></Route>
        <Route path="/users" element={<DisplayUsers />}></Route>
        <Route path="/buses" element={<DisplayBuses />}></Route>
        <Route path="/lines" element={<DisplayLines />}></Route>
        <Route path="/route" element={<RoutePage />}></Route>
        <Route path="/users/addUser" element={<NewUser />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
