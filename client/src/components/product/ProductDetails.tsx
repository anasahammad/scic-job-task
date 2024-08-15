import { useParams } from "react-router-dom";
import { products } from "../../utils/products";
import Container from "../Container";



const ProductDetails = () => {
    const {id} = useParams<{id: string}>()
    const product = products?.find(item=> item.id === id)
    return (
        <div className="p-8">
            <Container>
                <div> 
                {product?.productName}
                </div>


            </Container>
           
        </div>
    );
};

export default ProductDetails;