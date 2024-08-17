import { FcGoogle } from "react-icons/fc";
import { Link, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";
import toast from "react-hot-toast";


const Login = () => {
  
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
   
    const {loginUser, googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate: NavigateFunction = useNavigate()
    const from = location?.state || "/";
    const handleForm = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        
        console.log( email, password)
        loginUser(email, password)
        .then((result: UserCredential)=>{
            console.log(result.user)
            toast.success("Login Successful")
            navigate(from)
        }).catch((error: FirebaseError)=>{
            console.log(error)
            return toast.error(error.message)
        })
    }

    const handleGoogle = ()=>{
        googleLogin()
        .then(()=>{
            // setSuccess("Login successful")
            toast.success("Login Successful")
            navigate(from)
        })
        .catch((error: FirebaseError)=>{
            console.log(error)
            return toast.error(error.message)
        })
    }
    return (
        <div className="flex justify-center py-8">
            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Log In </h1>
      <form onSubmit={handleForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
          placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className="divider mt-0">Or</div>

      <div className="flex justify-center ">
      <button onClick={handleGoogle} className="btn w-[80%]">
        <FcGoogle/>
 Login with google
</button>
      </div>

     <div className="py-4">
     <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<Link to="/register" className="hover:underline dark:text-violet-600">Register Now</Link>.
			</p>
     </div>
    </div>
        </div>
    );
};

export default Login;