import { Link } from "react-router-dom";
import Container from "../../Container";
import useProduct from "../../../hooks/useProduct";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
  const {search, setSearch} = useProduct()
  const {user, logout} = useContext(AuthContext)
  const navLinks = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/about",
      title: "About "
    },
    {
      path: "/contact",
      title: "Contact"
    },
     
   !user?  {
    path: "/login",
    title: "Login"
  } : ""
    
  ]
    return (
        <div className="sticky top-0 w-full bg-slate-200 shadow-sm z-30">
            
            <div className="py-4 border-b-[1px] ">
            <Container>
            <div className="navbar font-poppins">
  <div className="navbar-start">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          
         
          {
            navLinks.map(link=> {
              return   <li key={link.title}>
              <Link to={link.path}>{link.title}</Link>
            </li>
            })
          }
      
        
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-2xl hidden md:block">Exclusive</Link>
  </div>

  <div className="navbar-center hidden md:block">
        <div className="w-full">
            <ul className="flex gap-6 items-center justify-around">
            {
            navLinks.map(link=> {
              return   <li key={link.title}>
              <Link to={link.path}>{link.title}</Link>
            </li>
            })

           
          }
            </ul>
        </div>
  </div>
  <div className="navbar-end gap-2">
    <div className="form-control">
      <input 
       onChange={(event)=>setSearch(event?.target.value) }
       value={search}
      type="text" placeholder="Search" className="input input-bordered w-32 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
        </div>
      </div>
      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><p className=" font-medium">{user?.displayName}</p></li>
        
        <li><a>Settings</a></li>
        {
          user? <li><a onClick={()=>{
            logout()
            .then(()=>{
              alert("Logout Successful")
              
            })
          }}>Logout</a></li> :  <li><Link to="/login">Login</Link></li>
        }
      </ul>
    </div>
  </div>
</div>
            </Container>
            </div>
            
            
        </div>
    );
};

export default Navbar;