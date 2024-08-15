
import Ratings from 'react-ratings-declarative';
import { truncateTxt } from '../../utils/truncateTxt';
import { Link } from 'react-router-dom';
interface ProductCardProps{
    data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    return (
        <div className="max-w-sm mx-auto  shadow-lg rounded-sm overflow-hidden group">
      <div className="relative bg-[#F5F5F5] h-[250px] w-[270px]">
        <div className="p-[49px] relative aspect-square">
        <img
          className="object-contain  w-full h-full"
          src={data.productImage}
          alt="Product"
        />
        </div>
       
       

        <Link to={`/details/${data.id}`}>
        <button className="mt-4 bottom-0 w-full absolute bg-black text-white text-center font-medium font-poppins py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-colors duration-300">
          View Details
        </button>
        </Link>
      </div>
     
      <div className="p-4">
        <h2 className="text-lg font-medium font-poppins">{truncateTxt(data.productName)}</h2>
        <div className="flex items-center space-x-2 my-2 font-medium font-poppins">
          <span className="text-[#DB4444]  text-xl">${data.price}</span>
          
        </div>
        <div className="flex items-center">
         
           <Ratings
            rating={data.ratings}
            widgetRatedColors="rgb(251, 191, 36)"
            widgetDimensions="20px"
            widgetSpacings="2px"
            readonly
          >
            {[...Array(5)].map((_, index) => (
              <Ratings.Widget key={index} />
            ))}
          </Ratings>
          <span className="ml-2 font-poppins font-semibold">({data.reviews ? data.reviews : 0})</span>
         
        </div>
       
      </div>
    </div>
    );
};

export default ProductCard;