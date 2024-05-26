import { FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdLaptopChromebook, MdOutlineRestaurantMenu, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to="/dashboard/review"><MdReviews /> Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><MdLaptopChromebook /> My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                    <li><NavLink to="/order/salad"><MdOutlineRestaurantMenu /> Menu</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;