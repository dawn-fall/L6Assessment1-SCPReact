import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ data }) {
    /*make the responsive navbar work*/
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleNavbar = () => { setIsCollapsed(!isCollapsed); };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark grad p-5'>
      <button className='navbar-toggler' type='button' onClick={toggleNavbar} aria-expanded={!isCollapsed}>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className="nav-item nav-item2"><Link to='/' aria-current='page' className='nav-link'><strong>SCP Subject Files</strong></Link></li>
          {data.map((subjects) => (<li className='nav-item nav-item2' key={subjects.Subject}><Link to={`${subjects.Subject}`} className='nav-link'>{subjects.Subject}</Link></li>))}
        </ul>
      </div>
    </nav>
  );
}
