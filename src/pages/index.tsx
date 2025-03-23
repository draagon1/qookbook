import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation Bar */}
      <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-center fixed top-0 left-0 right-0 z-10">
        <div className="flex space-x-12 text-gray-700 text-lg">
          <NavItem title="About" />
          <NavItem title="Ingredients" />
          <NavItem title="Recipes" />
          <NavItem title="Sources" />
          <NavItem title="News" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-24 text-center max-w-4xl p-8">
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

      {/* Additional Images Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
        <div className="flex justify-center items-center flex-1">
          <Image src="/images/farm-fresh.jpg" alt="Farm Fresh" width={600} height={600} className="rounded-lg shadow-lg" />
        </div>
        <div className="text-gray-800 text-2xl leading-relaxed p-8 bg-white shadow-lg rounded-lg flex-1">
          <h3 className="text-4xl font-semibold">Fresh from the Farm</h3>
          <p className="mt-6">Discover the best locally grown ingredients that elevate your cooking experience.</p>
        </div>
      </div>

      {/* Bottom Banner Image */}
      <div className="mt-16 w-full flex justify-center">
        <Image src="/images/ingredients.jpg" alt="Ingredients" width={900} height={450} className="rounded-lg shadow-md" />
      </div>

      {/* Start Cooking Today Button */}
      <div className="mt-16 text-center">
        <a href="#recipes">
          <button
            className="bg-[#FFD385] hover:bg-[#FFAAA6] text-white py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Start Cooking Today
          </button>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-lg text-gray-500">
        <p>Made with ❤️ by Qookbook</p>
      </footer>
    </div>
  );
}

function NavItem({ title }) {
  return (
    <div className="group relative">
      <div className="text-xl font-semibold px-4 py-2 hover:text-blue-500 cursor-pointer">
        {title}
      </div>
      <div
        className="absolute left-0 hidden group-hover:block mt-2 bg-white shadow-md rounded-lg w-48 py-2"
      >
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 1</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 2</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 3</a>
      </div>
    </div>
  );
}
