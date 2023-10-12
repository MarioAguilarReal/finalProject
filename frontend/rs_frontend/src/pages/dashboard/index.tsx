import { Outlet } from "react-router-dom";
import NewPropertyPage from "../new-property/newPropertyPage";
import Sidebar from "./aside-menu/aside-menu";
import "./dashboard.scss";
import { useContext, useEffect } from "react";
import { DataContext } from "../../store/dataContext";

const AdminSite = () => {
  const { isLoggedIn } = useContext(DataContext);

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>Acces Denied</h1>
        </div>
      ) : (
        <div className="dashboard">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="information-container">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSite;
