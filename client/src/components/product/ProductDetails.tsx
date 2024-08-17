import { useParams } from "react-router-dom";
import { products } from "../../utils/products";
import Container from "../Container";
import Ratings from 'react-ratings-declarative';


const ProductDetails = () => {
    const {id} = useParams<{id: string}>()
    const product = products?.find(item=> item.id === id)
    return (
        <div className="p-8">
            <Container>

                <div className="flex justify-between px-12">
                <div> 
                   <div className="aspect-square">
                   <img src={product?.productImage} alt="" className="object-contain" />
                   </div>
                </div>
                <div className="border space-y-5 flex-1 ml-8 px-4 ">
                    <div className="">
                        <h1 className="text-left text-2xl font-semibold">{product?.productName}</h1>

                        <div className="flex items-center gap-2 font-poppins  text-opacity-50 mt-1">
                        <Ratings
            rating={product.ratings}
            widgetRatedColors="rgb(251, 191, 36)"
            widgetDimensions="20px"
            widgetSpacings="2px"
            readonly
          >
            {[...Array(5)].map((_, index) => (
              <Ratings.Widget key={index} />
            ))}
          </Ratings>
          <div>({product?.reviews ? product?.reviews : 0} Reviews)</div>
                        </div>
                    </div>

                    <div className="text-2xl ">${product?.price}</div>
                    <div className="font-poppins">{product?.description}</div>

                    <hr className=""/>
                </div>
                </div>

            </Container>
           
        </div>
    );
};

export default ProductDetails;