import { useParams } from "react-router-dom";
import { products } from "../../utils/products";
import Container from "../Container";
import { Rating } from "@mui/material";



const ProductDetails = () => {
    const {id} = useParams<{id: string}>()
    const product = products?.find(item=> item.id === id)
    return (
        <div className="p-8">
            <Container>

                <div className="flex flex-col md:flex-row overflow-x-hidden justify-between md:px-12">
                <div> 
                   <div className="aspect-square">
                   <img src={product?.productImage} alt="" className="object-contain" />
                   </div>
                </div>
                <div className=" space-y-5 flex-1 md:ml-8 md:px-4 ">
                    <div className="">
                        <h1 className="text-left text-2xl font-semibold">{product?.productName}</h1>

                        <div className="flex flex-col md:flex-row md:items-center gap-2 font-poppins  text-opacity-50 mt-1">
                        <Rating value={product?.ratings} readOnly/>
          <div>({product?.reviews ? product?.reviews : 0} Reviews)</div>
                        </div>
                    </div>

                    <div className="text-2xl ">${product?.price}</div>
                    <div className="font-poppins">{product?.description}</div>

                    <hr className=""/>

                    <div className=" text-xl"><span className=" font-semibold">Category: </span>  {product?.category}</div>

                    <div className=" text-xl"><span className="font-semibold ">Brand: </span>  {product?.brand}</div>
                    

                    <div className="flex   justify-center items-center">
                        <button className="btn overflow-hidden md:btn-wide btn-outline">Buy Now</button>
                    </div>
                </div>
                </div>

            </Container>
           
        </div>
    );
};

export default ProductDetails;