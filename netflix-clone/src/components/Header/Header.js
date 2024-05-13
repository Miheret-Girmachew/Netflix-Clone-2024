import React, { useState, useEffect } from 'react';
import "./header.css";
import NetflixLogo from "../../assets/images/pngwing.com.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

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
                      <li><ArrowDropDownIcon /></li>
                  </ul>
              </div>
          </div> 
    </div>
  )
}

export default Header;
