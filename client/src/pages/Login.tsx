import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex justify-center py-8">
            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Log In </h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className="divider mt-0">Or</div>

      <div className="flex justify-center ">
      <button className="btn w-[80%]">
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