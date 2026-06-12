import { useContext, useEffect, useState } from "react";
import { FilterContext } from "./FilterContext";
import { Tally3 } from "lucide-react";
import axios from "axios";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  price: number;
}

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice } =
    useContext(FilterContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const itemsPerPage = 12;
  const totalPages = 15;

  useEffect(() => {
    const url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data.products);
      })
      .catch((error) => {
        console.error("error fetching ", error);
      });
  }, [currentPage]);

  const getFilteredProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === selectedCategory
      );
    }
    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter((p) => p.price >= minPrice);
    }
    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice);
    }
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    switch (filter) {
      case "expensive":
        filteredProducts = filteredProducts.filter((p) => p.price >= 100);
        break;
      case "cheap":
        filteredProducts = filteredProducts.filter((p) => p.price <= 10);
        break;
      case "popular":
        filteredProducts = filteredProducts.filter(
          (p) => p.price >= 10 && p.price <= 50
        );
        break;

      default:
        break;
    }
    console.log(
      "filterdProducts",
      filteredProducts,
      "category : ",
      selectedCategory
    );
    return filteredProducts;
  };
  const newFilteredProducts = getFilteredProducts();


  return (
    <section className="xl:w-[75rem] lg:w-[75rem] sm:w-[60rem] xs:w-[30rem] p-5">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mx-5 mb-3">
            <button
              className="border px-4 py-2 rounded-full flex items-center"
              onClick={() => setDropDownOpen(!dropDownOpen)}
            >
              <Tally3 className="mr-2" />
              {filter === "all" ? "Filter" : filter.toLowerCase()}
            </button>
            {dropDownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded mt-2 w-full sm:w-40">
                <button
                  onClick={() => setFilter("all")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("cheap")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Cheap
                </button>
                <button
                  onClick={() => setFilter("expensive")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Expensive
                </button>
                <button
                  onClick={() => setFilter("popular")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Popular
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {newFilteredProducts.map((p) => {
            return (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                image={p.thumbnail}
                price={p.price}
              />
            );
          })}
        </div>
        {/* pagination */}
        <div className="flex flex-col sm:flex-row mt-5 items-center ">
          <button
            className="ml-2 rounded-full border px-4 py-2"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button onClick={() => setCurrentPage(currentPage + 1)} className="ml-2 rounded-full border px-4 py-2 bg-black text-white">{currentPage}</button>
          <button className="ml-2 rounded-full border px-4 py-2 bg-white">
            {currentPage + 1}
          </button>
          <button onClick={() => setCurrentPage(currentPage + 2)}  className="ml-2 rounded-full border px-4 py-2 bg-white">
            {currentPage + 2}
          </button>
          <button
            className="ml-2 rounded-full border px-4 py-2"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={(currentPage - 2) >= totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default MainContent;
