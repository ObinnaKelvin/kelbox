import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as IoIcons5 from "react-icons/io5";
// import * as FiIcons from "react-icons/fi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../css/Navbar.css';
// import { IconContext } from 'react-icons'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        <div className='navbar'>
          <Link to='#' className='menu-bar1'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="navbar__items">
            <div className="left">
              <div className="logo">Kelbox</div>
            </div>
            <div className="right">
              <Link to='#' className='notifications'>
                <IoIcons.IoIosNotificationsOutline />
                <span className="count">3</span>
              </Link>
              <Link to='#' className='cart'>
                <IoIcons5.IoCartOutline />
                <span className="count">0</span>
              </Link>
              <Link to='#' className='user'>
                <MdIcons.MdAccountCircle />
                <span className="status">Sign Out</span>
              </Link>
              {/* <div className="notifications"><MdIcons.MdNotificationsNone /></div>
              <div className="cart"><FiIcons.FiShoppingCart /></div>
              <div className="user"><MdIcons.MdAccountCircle /></div> */}
            </div>
          </div>
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bar2'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;