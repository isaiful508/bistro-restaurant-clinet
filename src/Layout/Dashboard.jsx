import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaMoneyCheckAlt, FaReceipt, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

const Dashboard = () => {

    //TODO : get isAdmin value from the database 
    const isAdmin = true;

    return (
        <div className="flex mt-10">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054] " >

                <div className="uppercase text-center mt-8 mb-4">
                    <h2 className="cinzel-900">BISTRO BOSS</h2>
                    <p className="cinzel-700">Restaurant</p>
                </div>
                <ul className="menu uppercase cinzel-500 p-6">

                    <li className="">

                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink>

                    </li>
                    <li>

                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home</NavLink>

                    </li>
                    <li>

                        <NavLink to='/dashboard/reservation'>
                            <FaReceipt />
                            Reservation</NavLink>

                    </li>
                    <li>

                        <NavLink to='/dashboard/payment'>
                            <FaMoneyCheckAlt />
                            Payment History</NavLink>

                    </li>
                    <li>

                        <NavLink to='/dashboard/review'>
                            <IoIosAddCircle />
                            Add Review</NavLink>

                    </li>
                    <li>

                        <NavLink to='/dashboard/bookings'>
                            <FaBook />
                            My Bookings</NavLink>

                    </li>
                {/* shared navlinks */}
                    <div className="divider"></div>

                    <li>

                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home</NavLink>

                    </li>
                    <li>

                        <NavLink to='/menu'>
                        <IoMenu />
                            Menu</NavLink>

                    </li>
                    <li>

                        <NavLink to='/'>
                        <FaShoppingBag />

                            Shop</NavLink>

                    </li>
                    <li>

                        <NavLink to='/'>
                        <MdMessage />
                            contact</NavLink>

                    </li>

                </ul>


            </div>
            {/* dashboard side bar */}
            <div className="flex-1 p-4 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;