import React, { useState } from 'react';
import SideMenu from './SideMenu';

const App = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleSideMenuToggle = () => {
    setIsSideMenuOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <button onClick={handleSideMenuToggle}>Atidaryti šoninį meniu</button>
      <SideMenu open={isSideMenuOpen} onClose={handleSideMenuToggle} />
    </div>
  );
};

export default App;
