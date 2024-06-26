import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../hooks/UseCart";
import UseAdmin from "../../../hooks/UseAdmin";


const Navbar = () => {
   const [cart] = UseCart();
   const { user, logOut } = useContext(AuthContext);
   const [isAdmin] = UseAdmin();



  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        // console.log(error)
      })
  }

  const navOptions =
    <>
      <NavLink to='/'>HOME</NavLink>
      <NavLink>CONTACT US</NavLink>
      {/* <NavLink>DASHBOARD</NavLink> */}
      <NavLink to='/menu'>OUR MENU</NavLink>
      <NavLink to='/order/salad'>ORDER FOOD</NavLink>

      {
            user && isAdmin &&<NavLink to="/dashboard/adminHome">DASHBOARD</NavLink>
        }
        {
            user && !isAdmin &&<NavLink to="/dashboard/userHome">DASHBOARD</NavLink>
        }
      <NavLink to='/dashboard/cart'>
        <button className="flex items-center gap-1" >
        <FaShoppingCart className="text-xl"></FaShoppingCart>
          <div className="badge badge-secondary text-xl">
            
            +{cart.length}
          </div>
        </button>

      </NavLink>

    </>


  return (
    <div className="navbar container text-white fixed bg-opacity z-10 bg-[#15151580]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box inter-600 w-52">
            {
              navOptions
            }
          </ul>
        </div>
        <a className=" text-3xl cinzel-700 ">Bistro Boss <br />
          {/* <span className="text-2xl cinzel-700">Restaurant</span> */}
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 inter-600">
          {navOptions}
        </ul>
      </div>
      {
        user ? <><button onClick={handleLogOut} className=" btn btn-sm ml-2 uppercase inter-600">LOG OUT</button></> : <><NavLink to='/login' className="ml-2 uppercase inter-600">Login</NavLink></>
      }
    </div>
  );
};

export default Navbar;