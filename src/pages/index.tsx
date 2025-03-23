import Image from "next/image";

const categories = [
  {
    name: "Main Dishes",
    image: "/images/main-dishes.jpg",
    links: ["Pasta", "Rice Dishes", "Steak", "Seafood", "Curries"],
  },
  {
    name: "Side Dishes",
    image: "/images/side-dishes.jpg",
    links: ["Salads", "Bread", "Vegetables", "Dips & Sauces"],
  },
  {
    name: "Desserts",
    image: "/images/desserts.jpg",
    links: ["Cakes", "Cookies", "Ice Cream", "Pastries"],
  },
  {
    name: "Breakfast & Brunch",
    image: "/images/breakfast.jpg",
    links: ["Egg-Based Dishes", "Pancakes & Waffles", "Smoothies"],
  },
  {
    name: "Beverages",
    image: "/images/beverages.jpg",
    links: ["Teas & Coffees", "Mocktails", "Smoothies & Juices"],
  },
  {
    name: "International Cuisine",
    image: "/images/international.jpg",
    links: ["Asian", "Mediterranean", "Middle Eastern", "Latin American"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">Qookbook</h1>
        <p className="text-lg text-gray-600">Discover & Cook Local Favorites</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div className="relative w-full h-48">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{category.name}</h2>
              <ul className="space-y-1">
                {category.links.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-blue-500 hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>Made with ❤️ by Qookbook</p>
      </footer>
    </div>
  );
}
