import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import ProductCard from "../components/product/ProductCard";
import { products } from "../utils/products";


const Home = () => {
    return (
        <div className="p-8">
            <Container>
                <div>
                    <HomeBanner/>
                </div>

                <div className=" flex flex-col md:flex-row gap-3">
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {
                    products?.map((product)=> {
                        return <ProductCard key={product.id} data={product}/>
                    })
                }
                </div>

                    <div className="order-1 md:order-2 border-l-2 border-slate-500 flex flex-col">
                        <div className="w-full border-b-2 border-slate-500 py-4 px-2 flex">
                            <label htmlFor="sort">Sort By:</label>
                            <select name="" id="sort" className="">
                                <option value="low to high">Low to High Price</option>
                                <option value="high to low">High to Low Price</option>
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

                </div>
            </Container>
        </div>
    );
};

export default Home;