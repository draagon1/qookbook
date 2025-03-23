import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#A8E6CE] to-[#FFD385] text-gray-800 font-playfair flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-center fixed top-0 left-0 right-0 z-10">
        <div className="flex space-x-12 text-gray-700 text-lg">
          <Dropdown title="About" options={["Mission", "Vision", "Story"]} />
          <Dropdown title="Ingredients" options={["Fruits", "Vegetables", "Spices"]} />
          {/* Update this dropdown to link to the new page */}
          <Dropdown
            title="Recipes"
            options={["Main Dishes", "Side Dishes", "Desserts"]}
            // No need for onClick as Link will handle it now
          />
          <Dropdown title="Sources" options={["Farmers", "Markets", "Suppliers"]} />
          <Dropdown title="News" options={["Updates", "Events", "Articles"]} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-24 text-center max-w-4xl p-8">
        <h2 className="text-6xl font-extrabold leading-tight">
          Explore Global Flavors, Crafted with Locally Sourced Ingredients
        </h2>
        <p className="text-2xl mt-4">
          Bringing fresh, locally sourced ingredients to your kitchen with love.
        </p>
      </section>

      {/* "Start Cooking Today" Button */}
      <div className="mt-12 text-center">
        <Link href="/main-dishes"> {/* This will redirect to the Main Dishes page */}
          <a className="bg-[#FFAAA6] text-white text-3xl px-10 py-4 rounded-full shadow-lg hover:bg-[#FF8C94] transition duration-300">
            Start Cooking Today
          </a>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-lg text-gray-500 pb-12">
        <p>Made with ❤️ by Qookbook</p>
      </footer>
    </div>
  );
}

// Dropdown Component
function Dropdown({ title, options }) {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [clickedOpen, setClickedOpen] = useState(false);
  const containerRef = useRef(null);

  const isOpen = hoverOpen || clickedOpen;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setClickedOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
      onClick={(e) => {
        e.stopPropagation();
        setClickedOpen((prev) => !prev);
      }}
    >
      <button className="text-xl font-semibold px-4 py-2 hover:text-blue-500 cursor-pointer focus:outline-none">
        {title}
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded-lg mt-0 p-4 w-40 text-gray-700"> 
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <Link href={`/${option.toLowerCase().replace(" ", "-")}`}>
                  <a className="block px-4 py-2 hover:text-[#FF8C94]">{option}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
