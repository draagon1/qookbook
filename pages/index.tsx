import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
          {/* Modify the Recipes dropdown to link to the main-dishes page */}
          <Dropdown title="Recipes" options={["Main Dishes", "Side Dishes", "Desserts"]} />
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

      {/* Main Content */}
      <div className="mt-16 flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
        {/* Text Content */}
        <div className="text-2xl leading-relaxed p-8 bg-white shadow-lg rounded-lg flex-1">
          <h3 className="text-4xl font-semibold mb-4">Why Choose Local Ingredients?</h3>
          <p>
            Locally sourced ingredients offer unparalleled freshness and flavor while supporting small businesses and reducing environmental impact. Every meal tells a story of community and sustainability.
          </p>
          <h3 className="text-4xl font-semibold mt-8">Our Mission</h3>
          <p>
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
      <div className="mt-16 w-full flex justify-center">
        <Image
          src="/images/ingredients.jpg"
          alt="Fresh Ingredients"
          width={900}
          height={450}
          className="rounded-lg shadow-md hover:scale-105 transition duration-300"
        />
      </div>

      {/* "Start Cooking Today" Button */}
      <div className="mt-12 text-center">
        <Link href="#recipes">
          <span className="bg-[#FFAAA6] text-white text-3xl px-10 py-4 rounded-full shadow-lg hover:bg-[#FF8C94] transition duration-300">
            Start Cooking Today
          </span>
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
      <button className="text-xl font-semibold px-4 py-2 hover:text-blue-500 cursor-pointer focus:outline-none">
        {title}
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded-lg mt-0 p-4 w-40 text-gray-700"> 
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                {/* Link for Main Dishes */}
                <Link href={option === "Main Dishes" ? "recipes/main-dishes" : "#"}>
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
  );
}
