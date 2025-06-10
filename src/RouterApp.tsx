import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/Home/Home";
import Users from "./assets/Pages/Users/Users";
import DashboardLayout from "./assets/layouts/DashboardLayout/DashboardLayout";
import InventoryBox from "./assets/Pages/InventoryBox/InventoryBox"
import AdminDashboard from "./assets/Pages/InventoryBox/AdminDashboard";
import Offers from "./assets/Pages/Offers/Offers"
import Gozareshat from "./assets/Pages/Gozareshat/Gozareshat";


const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/gozareshat" element={<Gozareshat />}/>
          <Route path="/inventoryBox" element={<AdminDashboard/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
