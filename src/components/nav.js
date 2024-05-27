import React from 'react';


function Navbar() {
  return (
    <nav className="navbar" style={{ position:'absolute',fontSize: '30px',fontFamily: 'revert-layer',left:'5%',display: 'flex', alignItems: 'center', backgroundColor: 'rgba(221, 240, 235, 1)', padding: '10px' }}>
      <div className="navbar-left">
        <span className="multi" style={{color:'black'}}>Multi</span>
        <span className="mind" style={{color:'blue'}}>Mind</span>
      </div>
    </nav>
  );
}

export default Navbar;
