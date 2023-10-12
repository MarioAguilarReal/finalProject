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
import PropertyList from "./components/propertyList/propertyList";


const RouteWrapper: React.FC = () => {
    const location = useLocation();
    const routesWithoutNavFoot = ["/login", "/new-property", "/edit-property", "/admin/dashboard", "/new-users"];
    const shouldShowNavFoot = !routesWithoutNavFoot.includes(location.pathname);

    return (
    <div>
        {shouldShowNavFoot && <Navbar />}
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/new-users" element={<NewUsers />} />

            <Route path="/new-property" element={<NewPropertyPage />} />
            <Route path="/edit-property" element={<EditPropertyPage />} />
            <Route path="/property/:id" element={<DetailView />} />
            <Route path="/property/list" element={<PropertyList showFilters={true} />} />

            <Route path="/admin/dashboard" element={<AdminSite />} />
        </Routes>
        {shouldShowNavFoot && <Footer />}
    </div>
    );
}

export default RouteWrapper;