import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/Home/Home";
import Users from "./assets/Pages/Users/Users";
import DashboardLayout from "./assets/layouts/DashboardLayout/DashboardLayout";
import InventoryBox from "./assets/Pages/InventoryBox/InventoryBox"
import AdminDashboard from "./assets/Pages/InventoryBox/AdminDashboard";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/inventoryBox" element={<AdminDashboard/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
