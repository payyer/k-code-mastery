import { Navigate } from "react-router-dom";
import Admin from "../pages/Admin/Admin";

export default function PrivateRouteAdmin() {
  let userRole = JSON.parse(localStorage.getItem("USER_INFO"));

  return userRole.data.role === 1 ? <Admin /> : <Navigate to="/" />;
}
