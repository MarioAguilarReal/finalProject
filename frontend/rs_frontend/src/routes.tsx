import React from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import NewUsers from "./pages/new-user/new_users";
import Login from "./pages/login/login";
import PropertiesForm from "./components/propertiesForm/propertiesForm";
import AdminSite from "./pages/dashboard";
import NewPropertyPage from "./pages/new-property/newPropertyPage";
import EditPropertyPage from "./pages/edit-property/editPropertyPage";
import DetailView from "./pages/property-detail/detailView";
import PropertiesList from "./pages/dashboard/properties/properties-list";
import UsersList from "./pages/dashboard/users-list/users-list";


const RouteWrapper: React.FC = () => {
    const location = useLocation();
    const routesWithoutNavFoot = ["/login", "/admin/users", "/admin/edit/", "/admin/properties", "/admin/dashboard", "/admin/new-user"];
    const shouldShowNavFoot = !routesWithoutNavFoot.some(route => location.pathname.startsWith(route));

    return (
    <div>
        {shouldShowNavFoot && <Navbar />}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-property" element={<NewPropertyPage />} />
            <Route path="/edit-property" element={<EditPropertyPage />} />
            <Route path="/property/:id" element={<DetailView />} />
            <Route path="/admin" element={<AdminSite />} >
                <Route index path="dashboard" element={<NewPropertyPage />} />
                <Route path="edit/:id" element={<EditPropertyPage />} />
                <Route path="new-user" element={<NewUsers />} />
                <Route path="properties" element={<PropertiesList />} />
                <Route path="users" element={<UsersList />} />
            </Route>
        </Routes>
        {shouldShowNavFoot && <Footer />}
    </div>
    );
}

export default RouteWrapper;
