import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../Context/AuthContext";
import roles from "../utiles/roles";
function NAVBAR() {

  const {AuthData} = useContext(AuthenticationContext)

  const navlist = (
    <>
      <li>
        <Link to = {AuthData?.UserData?.role == roles.ADMIN ? "/admin" : "/"}>{AuthData?.UserData?.role == roles.ADMIN ? "Dash Board" :"Home"}</Link>
      </li>
      <li>
        <Link to = {AuthData?.UserData?.role == roles.ADMIN ? "/blogs" : "/my-blog"}>{AuthData?.UserData?.role == roles.ADMIN ? "Blog" : " "}</Link>
      </li>
      <li>
        <Link to = "/create-blog">Create Blog</Link>
      </li>
      <li>
        <Link to = "/contact">Contact</Link>
      </li>
      <li>
        <Link to ="/admin">Admin</Link>
      </li>
    </>
  );
  return (
    <div className="w-full max-w-screen abc mx-auto md:pl-20 px-4">
      <div className="navbar abc">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlist}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-bold cursor-pointer text-white">My Blog
          </a>
        </div>

        <div className="navbar-end w-[60rem]">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{navlist}</ul>
          </div>
      
          <div className="bttn">
          <Link to ='/login' id="login"><button className="btn btnn text-white md:w-[8rem] w-[5rem] ">LogIn</button></Link>           
          <Link to ="/signup"> <button className="btn btnn text-white md:w-[8rem] w-[5rem] md:ml-2 ml-2 ">SignUp</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NAVBAR;
