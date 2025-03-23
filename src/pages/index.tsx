import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleDropdownToggle}
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded-lg mt-0 p-4 w-40 text-gray-700">
          <ul>
            {options.map((option, index) => (
              <li key={index} className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <DropdownMenu title="Dropdown 1" options={options} />
      <DropdownMenu title="Dropdown 2" options={options} />
      <DropdownMenu title="Dropdown 3" options={options} />
    </div>
  );
};

export default App;
