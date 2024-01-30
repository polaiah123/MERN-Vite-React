import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { SmallSidebar, BigSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

const Dashboard = () => {
  const user = { name: 'Polaiah' };
  const [showSidebar, setshowSidebar] = useState(false);

  const toggleSidebar = () => {
    setshowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    console.log("user",user)
  };

  return (
    <DashboardContext.Provider value={{showSidebar,toggleSidebar,user,logoutUser}}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext)
export default Dashboard;
