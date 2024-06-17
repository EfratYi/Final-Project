import React, { useContext } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import { UserContext } from '../App';
import logo from '../../images/logo.png';
import '../css/public.css';

function Header({setUserData}) {  
  const navigate = useNavigate();
  const userData = useContext(UserContext);


  const handleLogout = () => {
    // מחיקת נתוני המשתמש מה-localStorage
    
    // עדכון ה-state
    setUserData({});

    // הפנייה לעמוד הכניסה
    navigate('/');
  };

  return (
    <header>
      <div className="header-logo-container">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <div className="profile">
      {userData && <span>Welcome, {userData.name}</span>}
      </div>
      <nav className="header-nav">
        <NavLink 
          to='/logIn' 
          className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"}
        >
          התחברות
        </NavLink>
        <NavLink 
          to='/signUp' 
          className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"}
        >
          הרשמה
        </NavLink>
        <NavLink 
          to='/' 
          className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"}
          onClick={handleLogout}
        >
          התנתקות
        </NavLink>
        {userData.role=="עובדת"||userData.role=="מנהלת" && <NavLink 
          to='/queues' 
          className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"}
        >
          תורים
        </NavLink>}
        <NavLink 
          to='/gallery' 
          className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"}
        >
          גלריה
        </NavLink>
        {userData.role=="עובדת"||userData.role=="מנהלת" &&  <NavLink 
          to='/orders' 
          className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"}
        >
          הזמנות
        </NavLink>}
        {userData.role=="מנהלת" &&  <NavLink 
          to='/dresses' 
          className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"}
        >
          שמלות
        </NavLink>}
        {userData.role=="מנהלת" &&  <NavLink 
          to='/accessories' 
          className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"}
        >
          אביזרים
        </NavLink>}
      </nav>
    </header>
  );
}
export default Header