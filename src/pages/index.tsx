import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <h1 className="text-3xl font-bold text-gray-800">Qookbook</h1>
        <div className="flex space-x-6 text-gray-700 text-lg">
          <Dropdown title="About" />
          <Dropdown title="Ingredients" />
          <Dropdown title="Recipes" />
          <Dropdown title="Sources" />
          <Dropdown title="News" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-20 text-center max-w-4xl">
        <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">Discover the Richness of Local Cuisine</h2>
        <p className="text-lg text-gray-600 mt-4">Explore hand-picked recipes made with locally sourced ingredients, supporting community farmers and sustainable food practices.</p>
      </section>

      {/* Main Content */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Text Content */}
        <div className="text-gray-800 text-lg leading-relaxed p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold">Why Local Ingredients Matter?</h3>
          <p className="mt-4">Using locally sourced ingredients ensures freshness, supports the local economy, and reduces the carbon footprint of imported goods. Our recipes focus on celebrating these ingredients to bring out their best flavors.</p>
          <h3 className="text-2xl font-semibold mt-6">The Story Behind Qookbook</h3>
          <p className="mt-4">Born from a passion for home-cooked meals, Qookbook is a community-driven project that brings together chefs, food lovers, and farmers to create an authentic culinary experience.</p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image src="/images/food-table.jpg" alt="Food Table" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Bottom Banner Image */}
      <div className="mt-12 w-full flex justify-center">
        <Image src="/images/ingredients.jpg" alt="Ingredients" width={800} height={400} className="rounded-lg shadow-md" />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Made with ❤️ by Qookbook</p>
      </footer>
    </div>
  );
}

function Dropdown({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="hover:text-blue-500 focus:outline-none">{title}</button>
      {open && (
        <div className="absolute bg-white shadow-md mt-2 rounded-md w-40 text-left">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
          </ul>
        </div>
      )}
    </div>
  );
}
