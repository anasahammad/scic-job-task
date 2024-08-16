import React from "react";
import useProduct from "../hooks/useProduct";
import { brands as brandOptions, categories as categoryOptions, priceRanges as priceRangeOptions } from "../utils/brands";

interface SortingComponentProps {
  sort: string;
  setSort: (value: string) => void;
}

const SortingComponent: React.FC<SortingComponentProps> = ({ sort, setSort }) => {
  const { brands, setBrands, categories, setCategories, priceRanges, setPriceRanges, fetchProducts } = useProduct();

  const handleCheckboxChanged = (
    checked: boolean,
    value: string,
    setFunction: React.Dispatch<React.SetStateAction<string[]>>,
    selectedValues: string[]
  ) => {
    if (checked) {
      setFunction([...selectedValues, value]);
    } else {
      setFunction(selectedValues.filter((item) => item !== value));
    }
  };

  const applyFilters = () => {
    fetchProducts(); // Fetch the products with the applied filters
  };

  return (
    <div className="flex flex-col">
      <div className="w-full border-b-2 border-slate-500 py-4 px-2 flex">
        <label htmlFor="sort">Sort By:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          id="sort"
          className=""
        >
          <option value="priceLowToHigh">Low to High Price</option>
          <option value="priceHighToLow">High to Low Price</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Brand Name */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Select Brands</h2>
        {brandOptions?.map((brand) => (
          <div className="flex flex-col space-y-2" key={brand}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name={brand}
                checked={brands.includes(brand)}
                onChange={(e) =>
                  handleCheckboxChanged(e.target.checked, brand, setBrands, brands)
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">{brand}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Select Price Range</h2>
        {priceRangeOptions?.map((price) => (
          <div className="flex flex-col space-y-2" key={price}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name={price}
                checked={priceRanges.includes(price)}
                onChange={(e) =>
                  handleCheckboxChanged(e.target.checked, price, setPriceRanges, priceRanges)
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">${price}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Category Name */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Select Category</h2>
        {categoryOptions?.map((category) => (
          <div className="flex flex-col space-y-2" key={category}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name={category}
                checked={categories.includes(category)}
                onChange={(e) =>
                  handleCheckboxChanged(e.target.checked, category, setCategories, categories)
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">{category}</span>
            </label>
          </div>
        ))}
      </div>

      <button onClick={applyFilters} className="btn btn-outline ml-4 mt-4">Apply Filters</button>
    </div>
  );
};

export default SortingComponent;
