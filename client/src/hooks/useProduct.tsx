
import { useContext } from "react";
import { productContext } from "../Providers/ProductProvider";






const useProduct = () => {
    const all = useContext(productContext)
    return all;
};

export default useProduct;