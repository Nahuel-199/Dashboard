import React, { useContext } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{ textDecoration: "none" }}>
        <span className='logo'>Inceptia</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <li>
             <DashboardIcon className="icon"/>
            <span>Dashboard</span>
            </li>
            <p className="title">LIST</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon"/>
            <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreOutlinedIcon className="icon"/>
            <span>Products</span>
            </li>
            </Link>
            <li>
             <CreditCardOutlinedIcon className="icon"/>
            <span>Orders</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
               <LocalShippingOutlinedIcon className="icon"/>
            <span>Delivery</span>
            </li>
            <li>
              <AlignVerticalBottomOutlinedIcon className="icon"/>
            <span>Stats</span>
            </li>
            <li>
              <CircleNotificationsIcon className="icon"/>
            <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamIcon className="icon"/>
            <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
            </li>
            <li>
              <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption" 
        onClick={() => dispatch({ type: "LIGHT"})}>     
        </div>
        <div className="colorOption" 
        onClick={() => dispatch({ type: "DARK"})}>
       </div>
      </div>
    </div>
  )
}

export default Sidebar