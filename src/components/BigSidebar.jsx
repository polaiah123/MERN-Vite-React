import Wrapper from "../assets/wrappers/BigSidebar";

import NavLinks from "./NavLinks";
import { useDashboardContext } from "../pages/Dashboard";
import Logo from './Logo'

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
     
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
       
        <div className="content">
          <Logo/>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
