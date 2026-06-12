import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../FilterContext";

interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
}

interface fetchedData {
  products: Product[];
}

const SideBar = () => {
  const {
    searchQuery,
    selectedCategory,
    minPrice,
    maxPrice,
    setSearchQuery,
    setSelectedCategory,
    setMinPrice,
    setMaxPrice,
  } = useContext(FilterContext);
  const [categroies, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error();
        }
        const data: fetchedData = await res.json();
        const uniqueCategories = [
          ...new Set(data.products.map((p) => p.category)),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const hundelSearchOnChange = (value) => {
    setSearchQuery(value ? value : undefined);
  };
  const hundelMinPriceOnChange = (value) => {
    setMinPrice(value ? parseFloat(value) : undefined);
  };
  const hundelMaxPriceOnChange = (value) => {
    setMaxPrice(value ? parseFloat(value) : undefined);
  };
  const hundelCategoryOnChange = (value) => {
    setSelectedCategory(value ? value : undefined);
  };
  const hundelResetFilters = () => {
    setSearchQuery("");
    setMaxPrice(undefined);
    setMinPrice(undefined);
    setSelectedCategory("");
  };

  return (
    <div className="m-6 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Ts Store</h1>
      <section>
        <input
          type="text"
          className="border-1 rounded px-2 mb-2 sm:mb-1"
          placeholder="search product"
          value={searchQuery}
          onChange={(e) => hundelSearchOnChange(e.target.value)}
        />

        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-1 mr-2 px-4 py-2 mb-3 w-full "
            placeholder="Min"
            value={minPrice ? minPrice : ''}
            onChange={(e) => hundelMinPriceOnChange(e.target.value)}
          />
          <input
            type="text"
            className="border-1 mr-2 px-4 py-2 mb-3 w-full "
            placeholder="Max"
            value={maxPrice ? maxPrice : ''}
            onChange={(e) => hundelMaxPriceOnChange(e.target.value)}
          />
        </div>
        {/* categories section */}

        <div className="mb-5">
          <h2 className="text-xl f mb-3">Categories</h2>
        </div>

        {categroies.map((category, index) => {
          return (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={category}
                className="mr-2 w-[16px] h-[16px]"
                onChange={(e) => hundelCategoryOnChange(e.target.value)}
                checked={selectedCategory === category}
              />
              {category.toUpperCase()}
            </label>
          );
        })}
        {/* reset button  */}
        <button
          className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5"
          onClick={() => hundelResetFilters()}
        >
          Reset Filter
        </button>
      </section>
    </div>
  );
};

export default SideBar;
