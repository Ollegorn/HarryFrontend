import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenuAndScrollToTop = () =>{
    setClick(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton)



  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>

        <Link to="/" className="navbar-logo" onClick={closeMobileMenuAndScrollToTop}>
          GSnitch
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenuAndScrollToTop}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/tournaments' className='nav-links' onClick={closeMobileMenuAndScrollToTop}>Tournaments</Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenuAndScrollToTop}>Products</Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenuAndScrollToTop}>Sign Up</Link>
          </li>
        </ul>

        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar