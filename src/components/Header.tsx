import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Header() {
  const [isActiveSB, setIsActiveSB] = useState(false);
  const toggleVisiblilitySB = () => {
    setIsActiveSB(!isActiveSB);
    document.body.classList.toggle('active');
  };
  return (
    <>
      <header>
        <Link to="/">
          <span>test-task</span>
        </Link>

        <div
          className={isActiveSB ? 'menu_btn menu_btn--active' : 'menu_btn'}
          onClick={toggleVisiblilitySB}>
          <div className="menu_btn__content"></div>
        </div>
      </header>
      <Sidebar isActiveSB={isActiveSB} setIsActiveSB={toggleVisiblilitySB} />
    </>
  );
}

export default Header;
