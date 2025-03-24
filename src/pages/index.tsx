import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#93163e] to-[#FF4C5B] text-[#88d499] font-playfair flex flex-col items-center relative overflow-hidden">
      {/* Background Splash - Adding gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF4C5B] via-[#FF6F74] to-[#FF8C94] opacity-20 animate-gradient-y z-0"></div>

      {/* Navigation Bar */}
      <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-20 border-b-8 border-[#FF8C94] hover:border-[#FFAAA6] transition duration-300">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/images/logo.jpg" // Replace with your logo image path
            alt="Qookbook Logo"
            width={150} // Increased logo size by 1.5x
            height={75} // Increased logo size by 1.5x
            className="cursor-pointer transform hover:scale-110 transition duration-300"
          />
        </Link>

        {/* Search Bar Section */}
        <div className="flex items-center justify-center relative mx-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 h-10 pl-12 pr-4 rounded-full bg-[#A8E6CE] text-black placeholder-gray-600 border-none focus:outline-none transform transition duration-300 ease-in-out hover:scale-105"
            disabled
          />
          <span className="absolute left-4 top-3 text-gray-600 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 18a7 7 0 100-14 7 7 0 000 14zM21 21l-4.35-4.35"
              />
            </svg>
          </span>
        </div>

        {/* Navigation Menu */}
        <div className="flex space-x-10 text-[#88d499] text-lg">
          <Dropdown title="About" options={["Mission", "Vision", "Story"]} />
          <Dropdown title="Ingredients" options={["Fruits", "Vegetables", "Spices"]} />
          <Dropdown title="Recipes" options={["Main Dishes", "Side Dishes", "Desserts"]} />
          <Dropdown title="Sources" options={["Farmers", "Markets", "Suppliers"]} />
          <Dropdown title="News" options={["Updates", "Events", "Articles"]} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-24 text-center max-w-4xl p-8 relative z-10">
        <h2 className="text-6xl font-extrabold leading-tight text-black hover:text-[#FF8C94] transition duration-300">
          Explore Global Flavors, Crafted with Locally Sourced Ingredients
        </h2>
        <p className="text-2xl mt-4 text-black hover:text-[#FF8C94] transition duration-300">
          Bringing fresh, locally sourced ingredients to your kitchen with love.
        </p>
      </section>

      {/* Main Content */}
      <div className="mt-16 flex flex-col md:flex-row items-center max-w-6xl w-full gap-12 relative z-10">
        {/* Text Content */}
        <div className="text-2xl leading-relaxed p-8 bg-white shadow-lg rounded-lg flex-1 border-4 border-[#FF8C94] transform hover:scale-105 transition duration-500">
          <h3 className="text-4xl font-semibold mb-4 text-black">Why Choose Local Ingredients?</h3>
          <p className="text-black">
            Locally sourced ingredients offer unparalleled freshness and flavor while supporting small businesses and reducing environmental impact. Every meal tells a story of community and sustainability.
          </p>
          <h3 className="text-4xl font-semibold mt-8 text-black">Our Mission</h3>
          <p className="text-black">
            Qookbook is a community-driven initiative celebrating the essence of home-cooked meals, connecting food lovers with sustainable sources and supporting local businesses to make the world taste better.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center flex-1">
          <Image
            src="/images/food-table.jpg"
            alt="Food Table"
            width={600}
            height={600}
            className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Bottom Banner Image */}
      <div className="mt-16 w-full flex justify-center relative z-10">
        <Image
          src="/images/ingredients.jpg"
          alt="Fresh Ingredients"
          width={900}
          height={450}
          className="rounded-lg shadow-md hover:scale-105 transition duration-300"
        />
      </div>

      {/* "Start Cooking Today" Button */}
      <div className="mt-12 text-center relative z-10">
        <Link href="#recipes">
          <span className="bg-[#FFAAA6] text-white text-3xl px-10 py-4 rounded-full shadow-lg hover:bg-[#FF8C94] transition duration-300 transform hover:scale-110">
            Start Cooking Today
          </span>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-lg text-gray-500 pb-12 relative z-10">
        <p>Made with ❤️ by Qookbook</p>
      </footer>
    </div>
  );
}

// Dropdown Component
function Dropdown({ title, options }: { title: string; options: string[] }) {
  // Local state for hover and click
  const [hoverOpen, setHoverOpen] = useState(false);
  const [clickedOpen, setClickedOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Combine states: dropdown is open if hovered or clicked
  const isOpen = hoverOpen || clickedOpen;

  // Handle click outside for this dropdown instance
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
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
      // Set hover events on the container to open dropdown
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
      onClick={(e) => {
        e.stopPropagation();
        setClickedOpen((prev) => !prev);
      }}
    >
      <button className="text-xl font-semibold px-4 py-2 hover:text-[#FF8C94] cursor-pointer focus:outline-none transform hover:scale-105 transition duration-300">
        {title}
      </button>
      {isOpen && (
        <div className="absolute bg-gradient-to-r from-[#FF4C5B] to-[#FF8C94] shadow-lg rounded-lg mt-0 p-4 w-40 text-gray-700 transform hover:scale-105 transition duration-500 z-30">
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                {/* Link for Main Dishes */}
                <Link href={option === "Main Dishes" ? "/recipes/main-dishes" : "#"}>
                  <span className="block px-4 py-2 hover:text-[#FF8C94] text-white">
                    {option}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
