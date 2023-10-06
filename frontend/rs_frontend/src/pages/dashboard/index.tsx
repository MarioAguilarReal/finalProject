import { Outlet } from "react-router-dom";
import NewPropertyPage from "../new-property/newPropertyPage";
import Sidebar from "./aside-menu/aside-menu";
import "./dashboard.scss";

const AdminSite = () => {
    return (
        <div className="dashboard">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="information-container">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminSite;
