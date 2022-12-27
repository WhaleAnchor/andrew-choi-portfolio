import { useState } from "react";
import "./Navbar.css";
import logoPng from '../../assets/logo.png'

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <div>
    <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''} >
      <img src={logoPng} alt="Logo" className="img"/>
    </a>
    <nav>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''} >
        <h2> About </h2>
      </a>

      <a href="#Projects" onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''} >
        <h2> Projects </h2>
      </a>
      
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''} >
        <h2 className='shopHover'>Contact</h2>
      </a>
    </nav>
    </div>
  );
};

export default Navbar