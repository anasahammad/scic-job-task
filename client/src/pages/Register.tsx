import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile, UserCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import toast from "react-hot-toast";


const Register = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [photoUrl, setPhotoUrl] = useState<string>('')
    const {createUser, googleLogin} = useContext(AuthContext)

    const navigate: NavigateFunction = useNavigate()
    const handleForm = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        
        console.log(name, email, password, photoUrl)
        createUser(email, password)
        .then((result: UserCredential)=>{
            console.log(result.user)
            toast.success("Account Created Successfully")
            updateProfile(result.user, {
                displayName: name,
                photoURL: photoUrl
            })

            navigate("/")
        }).catch((error: FirebaseError)=>{
            console.log(error)
            toast.error(error.message)
            return
        })
    }

    const handleGoogle = ()=>{
        googleLogin()
        .then(()=>{
            // setSuccess("Login successful")
            toast.success("Login Successful")
            navigate(location?.state ? location.state : "/")
        })
        .catch((error: FirebaseError)=>{
            console.log(error)
            toast.error(error.message)
        })
    }
    return (
        <div className="flex justify-center py-8">
            
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center">Register </h1>
  <form onSubmit={handleForm} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      name="name" placeholder="Enter your name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      name="email" placeholder="email" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="url" 
      value={photoUrl}
      onChange={(e)=>setPhotoUrl(e.target.value)}
      name="photoUrl" placeholder="Enter your Photo Link" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      name="password" placeholder="password" className="input input-bordered" required />
      
    </div>
    <div className="form-control mt-6">
      <button type="submit" className="btn btn-primary">Register</button>
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
 <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
            <Link to="/login" className="hover:underline dark:text-violet-600">Login Now</Link>.
        </p>
 </div>
</div>
    </div>
    );
};

export default Register;