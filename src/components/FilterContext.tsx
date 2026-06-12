import React, { createContext, useState, ReactNode } from "react";

interface FilterContextType {
  searchQuery: string;
  selectedCategory: string;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  setSearchQuery: (searchQuery: string) => void;
  setSelectedCategory: (selectedCategory: string) => void;
  setMinPrice: (minPrice: number | undefined) => void;
  setMaxPrice: (maxPrice: number | undefined) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        selectedCategory,
        minPrice,
        maxPrice,
        setSearchQuery,
        setSelectedCategory,
        setMinPrice,
        setMaxPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );

  
};