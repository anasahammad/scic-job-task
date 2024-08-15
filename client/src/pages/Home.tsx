import { useEffect, useState } from "react";
import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import ProductCard from "../components/product/ProductCard";
import SortingComponent from "../components/SortingComponent";
import useProduct from "../hooks/useProduct";



const Home = () => {
  const {products, setSort, sort} = useProduct()
    return (
        <div className="p-8">
            <Container>
                <div>
                    <HomeBanner/>
                </div>

                <div className=" flex flex-col md:flex-row gap-3">
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {
                    products?.map((product : any)=> {
                        return <ProductCard key={product.id} data={product}/>
                    })
                }
                </div>


                    <SortingComponent sort={sort} setSort={setSort}/>

                </div>
            </Container>
        </div>
    );
};

export default Home;