import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <h1 className="text-4xl font-extrabold text-gray-800">Qookbook</h1>
        <div className="flex space-x-6 text-gray-700 text-lg">
          <Dropdown title="About" options={["Our Story", "Mission"]} />
          <Dropdown title="Ingredients" options={["Local Produce", "Sustainability"]} />
          <Dropdown title="Recipes" options={["Main Dishes", "Desserts"]} />
          <Dropdown title="Sources" options={["References", "Citations"]} />
          <Dropdown title="News" options={["Latest Updates", "Events"]} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-24 text-center max-w-4xl">
        <h2 className="text-6xl font-extrabold text-gray-800 leading-tight">Explore Authentic Local Cuisine</h2>
        <p className="text-2xl text-gray-600 mt-4">Bringing fresh, locally sourced ingredients to your kitchen.</p>
      </section>

      {/* Main Content */}
      <div className="mt-16 flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
        {/* Text Content */}
        <div className="text-gray-800 text-2xl leading-relaxed p-8 bg-white shadow-lg rounded-lg flex-1">
          <h3 className="text-4xl font-semibold">Why Choose Local Ingredients?</h3>
          <p className="mt-6">Locally sourced ingredients offer unparalleled freshness and flavor while supporting small businesses and reducing environmental impact.</p>
          <h3 className="text-4xl font-semibold mt-8">Our Mission</h3>
          <p className="mt-6">Qookbook is a community-driven initiative that celebrates the essence of home-cooked meals, connecting food lovers with sustainable sources.</p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center flex-1">
          <Image src="/images/food-table.jpg" alt="Food Table" width={600} height={600} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Bottom Banner Image */}
      <div className="mt-16 w-full flex justify-center">
        <Image src="/images/ingredients.jpg" alt="Ingredients" width={900} height={450} className="rounded-lg shadow-md" />
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-lg text-gray-500">
        <p>Made with ❤️ by Qookbook</p>
      </footer>
    </div>
  );
}

function Dropdown({ title, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="hover:text-blue-500 focus:outline-none text-xl font-semibold">{title}</button>
      {open && (
        <div className="absolute bg-white shadow-lg mt-2 rounded-md w-48 text-left">
          <ul>
            {options.map((option, index) => (
              <li key={index} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

