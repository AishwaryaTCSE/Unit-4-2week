import React from "react";

const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  desc: "Simple product description",
}));

export default function MainContent() {
  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Responsive grid of product cards</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(p => (
          <article key={p.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition">
            <div className="h-36 bg-gray-100 dark:bg-gray-700 rounded-md mb-3 flex items-center justify-center text-gray-500">
              Image
            </div>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold">₹499</span>
              <button className="text-sm px-2 py-1 bg-blue-600 text-white rounded">Buy</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
