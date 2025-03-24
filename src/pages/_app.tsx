// src/App.tsx

import React from "react";
import Header from "../components/header"; // Import Header
import { useRouter } from "next/router";
import HomePage from "../pages/HomePage"; // Import HomePage
import Link from "next/link";

const App = () => {
  const router = useRouter(); // Next.js Router

  return (
    <div>
      <Header /> {/* Include Header */}
      <div style={{ marginTop: "80px" }}> {/* Adds space to avoid overlap with fixed header */}
        {/* Main Page Content */}
        {router.pathname === "/" && <HomePage />}

        {/* Navigation Links (Example) */}
        <nav>
          <Link href="/">
            <span className="cursor-pointer text-blue-500">Home</span>
          </Link>
          <Link href="/recipes/main-dishes">
            <span className="cursor-pointer text-blue-500 ml-4">Main Dishes</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default App;
