import { use } from "react";
import { Link,NavLink, useLocation } from "react-router";
import { AuthContext } from "../../Contexts & Providers/AuthContext";

export default function Navbar() {
  
const {user,signOutUser} = use(AuthContext)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find a Job", path: "/jobs" },
    { name: "Recruiters", path: "/recruiters" },
    
    user ? { name: "Applications", path: "/applications" } : '',


    user ? { name: "Add Jobs", path: "/addjobs" } : '',
    
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation(); 


  const handleSignOut= () =>{
    signOutUser()
  .then(()=>{
    console.log("sign out successful")
  })
  .catch(err=>console.log("error - ",err))
  }

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          CareerCode
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map( link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 font-medium" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>



        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {
            user ? 
            <button onClick={handleSignOut} className="btn bg-blue-600 text-white  hover:bg-blue-700 transition">Log Out</button> 
            : 
            <div>
            <NavLink
            to="/register"
            className={({isActive})=> `hover:text-white hover:bg-blue-700 hover:transition  px-5 py-2 rounded-lg 

            ${isActive || location?.pathname == "/"  ? "bg-blue-600 text-white  hover:bg-blue-700 transition" : ""}`}
          >
            Register
          </NavLink>


          <NavLink
            to="/login"
            className={({isActive})=> `hover:text-white hover:bg-blue-700 hover:transition px-5 py-2 rounded-lg ${isActive ? "bg-blue-600 text-white hover:bg-blue-700 transition" : ""}`}
          >
            Sign in
          </NavLink>
          </div>
          }
        </div>
      </div>

      
    </nav>
  );
}
