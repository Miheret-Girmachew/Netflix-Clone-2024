import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./header.css";
import NetflixLogo from "../../assets/images/pngwing.com.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className={`header_outer_container ${scrolling ? 'nav__black' : ''}`}>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li onClick={handleLogout} style={{ cursor: 'pointer' }}><LogoutIcon /></li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
