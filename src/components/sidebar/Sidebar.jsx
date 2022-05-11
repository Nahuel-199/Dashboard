import React, { useContext } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
// import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
// import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
// import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
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
        <span className='logo'>Traviu</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <li>
          <Link to="/" style={{ textDecoration: "none" }}>
             <DashboardIcon className="icon"/>
            <span>Dashboard</span>
            </Link>
            </li>
            <p className="title">DESTINO</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
            <input type="text" placeholder='Donde va a ir...' />
            </li>
            </Link>
            <p className="title">SELECCIÓN DE FECHA</p>
            <li>
             <input type="date" placeholder='Fecha de viaje...' />
            </li>
            <p className="title">PERSONAS</p>
            <li>
              <Link to="/integrantes" style={{ textDecoration: "none" }}>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span>Agregar integrante</span>
            </Link>
            </li>
            <p className="title">INTEGRANTES DEL VIAJE</p>
            <li>
              <img src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg" alt="profile"/>
            <span>Nahuel C.</span>
            </li>
            <li>
            <img src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg" alt="profile"/>
            <span>Carlos S.</span>
            </li>
            <li>
            <img src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg" alt="profile"/>
            <span>Felipe O.</span>
            </li>
            <li>
            <img src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg" alt="profile"/>
            <span>Tomas V.</span>
            </li>
            <li>
            <img src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg" alt="profile"/>
            <span>Ivana A.</span>
            </li>
            <p className="title">CUENTA</p>
            <li>
              <Link to="/profile" style={{ textDecoration: "none" }}>
              <AccountCircleOutlinedIcon className="icon"/>
            <span>Perfil</span>
            </Link>
            </li>
            <li>
              <Link to="/gastos" style={{ textDecoration: "none" }}>
              <CreditCardOutlinedIcon className="icon"/>
            <span>Agregar gasto</span>
            </Link>
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