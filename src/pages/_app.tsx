import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const App: React.FC = () => {
  const [clickedOpen, setClickedOpen] = useState<number | null>(null);
  const [hoverOpen, setHoverOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const dropdownOptions = [
    "About",
    "Ingredients",
    "Recipes",
    "Sources",
    "News",
  ];

  const handleClickOutside = (e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setClickedOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#A8E6CE] py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Explore Global Flavors, Crafted with Locally Sourced Ingredients</h1>
        <p className="text-xl mb-8">Bringing fresh, locally sourced ingredients to your kitchen with love.</p>
        <Link href="/recipes">
          <a className="px-8 py-4 bg-[#FF8C94] text-white text-lg font-semibold rounded-full hover:bg-[#FFAAA6]">
            Start Cooking Today
          </a>
        </Link>
      </section>

      {/* Why Choose Local Ingredients Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Local Ingredients?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Locally sourced ingredients offer unparalleled freshness and flavor while supporting small businesses and reducing environmental impact. Every meal tells a story of community and sustainability.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-[#DCEDC2] text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Qookbook is a community-driven initiative celebrating the essence of home-cooked meals, connecting food lovers with sustainable sources, and supporting local businesses to make the world taste better.
        </p>
      </section>

      {/* Fresh Ingredients Section */}
      <section className="py-20 text-center bg-[#FFD385]">
        <h2 className="text-3xl font-bold mb-6">Fresh Ingredients</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Explore a wide range of fresh ingredients sourced locally, perfect for creating nutritious and delicious meals.
        </p>
        <Link href="/ingredients">
          <a className="px-8 py-4 bg-[#FF8C94] text-white text-lg font-semibold rounded-full hover:bg-[#FFAAA6]">
            Browse Ingredients
          </a>
        </Link>
      </section>

      {/* Dropdown Menu */}
      <div className="relative inline-block" ref={containerRef}>
        <button
          className="text-xl font-semibold px-4 py-2 hover:text-blue-500 cursor-pointer focus:outline-none"
          onMouseEnter={() => setHoverOpen(true)}
          onMouseLeave={() => setHoverOpen(false)}
          onClick={(e) => {
            e.stopPropagation();
            setClickedOpen((prev) => (prev === null ? 0 : null));
          }}
        >
          Explore
        </button>
        {(clickedOpen !== null || hoverOpen) && (
          <div className="absolute bg-white shadow-lg rounded-lg mt-2 p-4 w-48 text-gray-700">
            <ul>
              {dropdownOptions.map((option, index) => (
                <li key={index}>
                  <Link href={option === "Recipes" ? "/recipes" : "#"}>
                    <span className="block px-4 py-2 hover:text-[#FF8C94]">
                      {option}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#FF8C94] py-12 text-center text-white">
        <p className="text-xl">Made with ❤️ by Qookbook</p>
      </footer>
    </div>
  );
};

export default App;
