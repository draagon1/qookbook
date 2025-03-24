// src/components/Header.tsx

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header style={headerStyle}>
      {/* Logo with link to homepage */}
      <Link href="/" passHref>
        <span style={logoStyle}>
          <img src="/images/logo.jpg" alt="Logo" style={logoImageStyle} />
        </span>
      </Link>

      {/* Dropdown Menu */}
      <div style={dropdownContainerStyle} onMouseLeave={handleMouseLeave}>
        <ul style={menuStyle}>
          {["Menu 1", "Menu 2", "Menu 3"].map((menu, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              style={menuItemStyle}
            >
              <span>{menu}</span>
              {openDropdown === index && (
                <ul style={submenuStyle}>
                  <li>
                    <Link href={`/category/${menu.toLowerCase()}-1`} passHref>
                      <span>Submenu Item 1</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/category/${menu.toLowerCase()}-2`} passHref>
                      <span>Submenu Item 2</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

const logoStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
};

const logoImageStyle: React.CSSProperties = {
  width: "150px",
  height: "auto",
};

const dropdownContainerStyle: React.CSSProperties = {
  position: "relative",
};

const menuStyle: React.CSSProperties = {
  display: "flex",
  listStyleType: "none",
  margin: 0,
  padding: 0,
};

const menuItemStyle: React.CSSProperties = {
  padding: "10px 20px",
  cursor: "pointer",
  position: "relative",
};

const submenuStyle: React.CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: "#555",
  listStyleType: "none",
  margin: 0,
  padding: "10px",
  width: "200px",
  display: "block",
  zIndex: 999,
};

export default Header;
