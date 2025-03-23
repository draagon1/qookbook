import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Qookbook</h1>
        <p className="text-lg text-gray-600">Your guide to local dishes</p>
      </header>

      <main className="flex flex-col items-center">
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Category 1: Main Dishes */}
          <div className="category-card bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Main Dishes</h2>
            <ul>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Pasta</a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Rice Dishes</a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Steak</a>
              </li>
            </ul>
          </div>

          {/* Category 2: Side Dishes */}
          <div className="category-card bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Side Dishes</h2>
            <ul>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Salads</a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Bread</a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Vegetables</a>
              </li>
            </ul>
          </div>

          {/* Add more categories here */}
        </div>
      </main>

      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>Made with nigga by Qookbook</p>
      </footer>
    </div>
  );
}

