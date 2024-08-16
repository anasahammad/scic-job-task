
import { createContext, useEffect, useState } from "react";

export const productContext = createContext<any>(null)

interface ProductProviderProps{
    children: React.ReactNode;
}


const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
    const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('name')

  const itemsPerpage = 10;
  const [count, setCount] = useState(0)
  const totalPages = Math.ceil(count /itemsPerpage)
  const [currentPage, setCurrentPage] = useState(1)

  
  const fetchProducts = async ()=>{
    try {
      const response = await fetch(`http://localhost:5000/products?search=${search}&sort=${sort}&limit=${itemsPerpage}&page=${currentPage}`)
      const data = await response.json()
      setProducts(data.products)
      setCount(data.totalDocuments)
      console.log(data.products)
      setLoading(false)
    } catch (error) {
        console.log(error)
        
    }
  }

  useEffect(()=>{
   
    fetchProducts()
  }, [search, sort, currentPage, itemsPerpage])

 const handleCurrentPage = (index: number)=>{
   setCurrentPage(index+1)
 }

 const handlePrev = ()=>{
  if(currentPage > 1){
    setCurrentPage(currentPage - 1)
    
  }
 }
 console.log(currentPage)

 const handleNext = ()=>{
  if(currentPage < totalPages){
    setCurrentPage(currentPage + 1)
  }
 
 }
  const values = {
    products,
    setSearch,
    sort,
    setSort,
    totalPages,
    handleCurrentPage,
    currentPage,
    handlePrev,
    handleNext
  }
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;