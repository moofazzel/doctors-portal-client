import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/UseAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(UserContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to={"/dashboard"}>My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to={"/dashboard/allusers"}>All User</Link>
                </li>
                <li>
                  <Link to={"/dashboard/addDoctor"}>Add a Doctor</Link>
                </li>
                <li>
                  <Link to={"/dashboard/managedoctors"}>Manage Doctor</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
