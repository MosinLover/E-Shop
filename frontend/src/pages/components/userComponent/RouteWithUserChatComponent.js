import { UserChatComponent } from "./UserChatComponent";
import { Outlet } from "react-router-dom";

export const RouteWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};
