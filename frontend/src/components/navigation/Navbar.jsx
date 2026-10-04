import {Search,Heart,UserRound,ShoppingCart} from 'lucide-react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
 
const Navbar = () => {
  return (
    <nav className="flex justify-between px-16 py-10 items-center gap-40">
      <div className="flex items-center gap-6">
        {/* logo */}
        <Link className="text-3xl text-black font-bold" to="/">
          Savintra
        </Link>
      </div>
      <div className="flex flex-wrap items-center flex-1 gap-10">
        <ul className="flex gap-14 text-gray-600 hover:text-black">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/men"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/women"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kids"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Kids
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        {/* search bar */}
        <div className="border rounded-sm flex overflow-hidden border-gray-300">
          <button className="flex items-center justify-center px-4">
            <Search className="text-gray-500" />
            <input
              type="text"
              className="px-4 py-2 outline-none"
              placeholder="Search"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ul className="flex items-center gap-8 text-gray-500">
          <li>
            <button>
              <Heart />
            </button>
          </li>
          <li>
            <button>
              <UserRound />
            </button>
          </li>
          <li>
            <Link to="/cart-items">
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar