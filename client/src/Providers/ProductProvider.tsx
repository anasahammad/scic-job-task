
import { createContext, useEffect, useState } from "react";

export const productContext = createContext(null)

interface ProductProviderProps{
    children: React.ReactNode;
}


const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
    const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('name')
  
  const fetchProducts = async ()=>{
    try {
      const response = await fetch(`http://localhost:5000/products?search=${search}&sort=${sort}`)
      const data = await response.json()
      setProducts(data)
      console.log(data)
      setLoading(false)
    } catch (error) {
        console.log(error)
        
    }
  }

  useEffect(()=>{
   
    fetchProducts()
  }, [search, sort])

  console.log(search)

  const values = {
    products,
    setSearch,
    sort,
    setSort
  }
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;