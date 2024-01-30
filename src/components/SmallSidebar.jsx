import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/Dashboard";
import { FaTimes } from 'react-icons/fa';
import links from "../utils/links";
import { NavLink } from 'react-router-dom';

const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useDashboardContext();
 

  return <Wrapper>
    <div  className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }>
        <div className="content">
            <button type='button' className="close-btn" onClick={toggleSidebar}>
                <FaTimes/>
            </button>
            <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;

              return (
                <NavLink
                  to={path}
                  key={text}
                  className='nav-link'
                  onClick={toggleSidebar}
                  // will discuss in a second
                  end
                >
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              );
            })}
            </div>
        </div>

    </div>

    </Wrapper>;
};

export default SmallSidebar;
