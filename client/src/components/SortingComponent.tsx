
interface SortingComponentProps{
    sort: string;
    setSort: (value:string)=>void;
}
const SortingComponent: React.FC<SortingComponentProps> = ({sort, setSort}) => {
    return (
        <div className=" flex flex-col">
                        <div className="w-full border-b-2 border-slate-500 py-4 px-2 flex">
                            <label htmlFor="sort">Sort By:</label>
                            <select value={sort} onChange={(e)=>{
                                setSort(e.target.value)
                            }} name="" id="sort" className="">
                                <option value="priceLowToHigh">Low to High Price</option>
                                <option value="priceHighToLow">High to Low Price</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>

                        <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Select Categories</h2>
      <div className="flex flex-col space-y-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="electronics"
          
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Electronics</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="homeAndKitchen"
            
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Home and Kitchen</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="accessories"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Accessories</span>
        </label>
      </div>
    </div>
                    </div>
    );
};

export default SortingComponent;