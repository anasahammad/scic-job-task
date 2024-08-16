import useProduct from "../hooks/useProduct";

interface PaginationPorps{
    handlePageChange: (value: number)=>void;
    handlePrev: ()=>void;
    handleNext: ()=>void;
    currentPage: number;
}

   
const Pagination: React.FC<PaginationPorps> = ({handlePageChange, currentPage, handlePrev, handleNext}) => {
    const {totalPages} = useProduct()
    console.log(totalPages)
    return (
        <div className="flex justify-center items-center">

<button disabled={currentPage === 1} onClick={handlePrev} className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md  rtl:-scale-x-100 dark:bg-gray-800 hover:bg-blue-400 hover:text-white ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    </button>
            {Array.from({length: totalPages}, (_, index)=>{
                return <button  onClick={()=>handlePageChange(index)} className={`btn  ${currentPage === index + 1 ? 'btn-info ': 'btn-neutral'}`} key={index}>{index+1}</button>
            })}

<button disabled={currentPage === totalPages} onClick={()=>handleNext()} className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
    </button>
    </div>
    );
};

export default Pagination;