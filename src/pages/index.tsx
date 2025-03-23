import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Navigation Bar with Hover Dropdown */}
      <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-center fixed top-0 left-0 right-0 z-10">
        <div className="relative flex space-x-12 text-gray-700 text-lg">
          <NavItem title="About" />
          <NavItem title="Ingredients" />
          <NavItem title="Recipes" />
          <NavItem title="Sources" />
          <DropdownMenu />
          <NavItem title="News" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-24 text-center max-w-4xl p-8">
        <h2 className="text-6xl font-extrabold text-gray-800 leading-tight">
          Explore Authentic Local Cuisine
        </h2>
        <p className="text-2xl text-gray-600 mt-4">
          Bringing fresh, locally sourced ingredients to your kitchen.
        </p>
        <button className="mt-6 py-2 px-6 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
          Start Cooking Today!
        </button>
      </section>

      {/* Featured Recipes Section */}
      <section className="mt-16 text-center max-w-4xl p-8">
        <h3 className="text-4xl font-semibold text-gray-800">Featured Recipes</h3>
        <p className="text-xl text-gray-600 mt-4">Explore our top recipes made with fresh, local ingredients.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/recipe-1.jpg"
              alt="Recipe 1"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h4 className="text-2xl font-semibold">Recipe 1</h4>
              <p className="text-gray-600">A delicious dish made with locally sourced ingredients.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/recipe-2.jpg"
              alt="Recipe 2"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h4 className="text-2xl font-semibold">Recipe 2</h4>
              <p className="text-gray-600">Try this easy and tasty dish with local farm ingredients.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/recipe-3.jpg"
              alt="Recipe 3"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h4 className="text-2xl font-semibold">Recipe 3</h4>
              <p className="text-gray-600">Fresh and flavorful dish made with seasonal produce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mt-16 flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
        {/* Text Content */}
        <div className="text-gray-800 text-2xl leading-relaxed p-8 bg-white shadow-lg rounded-lg flex-1">
          <h3 className="text-4xl font-semibold">Why Choose Local Ingredients?</h3>
          <p className="mt-6">
            Locally sourced ingredients offer unparalleled freshness and flavor while supporting small businesses and reducing environmental impact.
          </p>
          <h3 className="text-4xl font-semibold mt-8">Our Mission</h3>
          <p className="mt-6">
            Qookbook is a community-driven initiative that celebrates the essence of home-cooked meals, connecting food lovers with sustainable sources.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center flex-1">
          <Image
            src="/images/food-table.jpg"
            alt="Food Table"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Banner Image */}
      <div className="mt-16 w-full flex justify-center">
        <Image
          src="/images/ingredients.jpg"
          alt="Ingredients"
          width={900}
          height={450}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-lg text-gray-500">
        <p>Made with ❤️ by Qookbook</p>
      </footer>
    </div>
  );
}

// Navigation Bar Item Component
function NavItem({ title }: { title: string }) {
  return (
    <div className="text-xl font-semibold px-4 py-2 hover:text-blue-500 cursor-pointer">
      {title}
    </div>
  );
}

// Dropdown Menu Component
function DropdownMenu() {
  return (
    <div className="relative group">
      <button className="text-xl font-semibold px-4 py-2 hover:text-blue-500 cursor-pointer">
        Menu
      </button>
      <div className="absolute hidden group-hover:block top-12 left-0 w-48 bg-white shadow-md rounded-lg">
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Option 1
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Option 2
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Option 3
        </a>
      </div>
    </div>
  );
}
