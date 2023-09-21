import React, { useState, useEffect } from 'react';

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    console.log('Dark mode button clicked');
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-gray-500 dark:text-gray-400 shadow-none p-2 focus:outline-none text-lg outline-none ring-transparent cursor-pointer"
    >
      {darkMode ? (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-10 h-10 svg-snoweb svg-theme-light"
          fill="currentColor"
          stroke="currentColor"
          viewBox="0 0 100 100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0" >
          <path 
          strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          d="M81.3,62a32.1,32.1,0,0,1-13.5,2.9A32.6,32.6,0,0,1,35.1,32.2,32.1,32.1,0,0,1,38,18.7,32.7,32.7,0,1,0,81.3,62Z">
         </path>
          
        </svg>
        //  WARNING This work includes material that may be protected as a trademark in some jurisdictions. If you want to use it, you have to ensure that you have the legal right to do so and that you do not infringe any trademark rights. The use of these trademarks does not indicate endorsement of the trademark holder by Snoweb SVG, nor vice versa. See the trademark owner for rules about appropriate use of their trademarks. https://github.com/tailwindlabs/heroicons/blob/master/LICENSE 
        
      )}

      {/* {darkMode ? 'Light Mode' : 'Dark Mode'} */}
    </button>
  );
}

export default DarkModeButton;
