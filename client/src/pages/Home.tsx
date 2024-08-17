import { useEffect, useState } from "react";
import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import ProductCard from "../components/product/ProductCard";
import SortingComponent from "../components/SortingComponent";
import useProduct from "../hooks/useProduct";
import { useLoaderData } from "react-router-dom";
import Pagination from "../components/Pagination";



const Home = () => {
  const {products, setSort, sort, handleCurrentPage, currentPage, handlePrev, handleNext, } = useProduct()

    return (
        <div className="p-8">
            <Container>
                <div>
                    <HomeBanner/>
                </div>

                
                <div className=" flex flex-col-reverse  md:flex-row   gap-3">

                  {
                    products?.length > 0 ?  <div className=" flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {
                        products?.map((product : any)=> {
                            return <ProductCard key={product.id} data={product}/>
                        })
                    }
                    </div> : <div className="flex-1 flex justify-center items-center text-4xl">No product Found!</div>
                  }
               


                    <div className=" ml-4 border-l-2 border-slate-500">
                    <SortingComponent   sort={sort} setSort={setSort}/>
                    </div>

                </div>

                <div>
                    <Pagination currentPage={currentPage} handlePageChange={handleCurrentPage}
                     handlePrev={handlePrev} handleNext={handleNext}/>
                </div>
            </Container>
        </div>
    );
};

export default Home;