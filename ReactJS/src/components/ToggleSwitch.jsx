import React, { useEffect, useState } from 'react';

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const hasSetDarkMode = localStorage.getItem('darkmode');
    return hasSetDarkMode === 'on' || (hasSetDarkMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkmode', 'on');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('darkmode', 'off');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <label className="toggle"> 
        <input
          type="checkbox"
          id="darkmode-switch"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;









// import React from 'react'

// const ToggleSwitch = () => {
//   return (
//     <div>
      
//       <label className="toggle"> 
//         <input type="checkbox" id="darkmode-switch"/>
//         <span className="slider"></span>
//       </label>

//     </div>
//   )
// }

// export default ToggleSwitch



      {/* <input type="checkbox" id="darkmode-switch"/> */}

      {/* <div className="darkmode-toggle">
        <p>Dark Mode</p>
        <label className="toggle"> 
          <input type="checkbox" id="darkmode-switch"/>
          <span className="slider"></span>
        </label>
      </div> */}
