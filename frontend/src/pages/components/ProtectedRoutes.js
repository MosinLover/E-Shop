import { Outlet, Navigate } from "react-router-dom";
import { UserChatComponent } from "./userComponent/UserChatComponent";

export const ProtectedRoutes = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent />
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};
