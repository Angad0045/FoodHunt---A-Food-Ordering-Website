import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useStatus from "../../Utility/useStatus";
import useTheme from "../ThemeContext";
const loggedInUser = () => {
  //API
  return false;
};

const Heading = () => (
  <a href="/" className="text-3xl font-bold text-white">
    {/* <img className="logo" src={Logo} alt="Logo"></img> */}
    <h1>FoodHUNT</h1>
  </a>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const isOnline = useStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const { themeMode, darkMode, lightMode } = useTheme();
  const themeChangeBtn = () => {
    console.log("clicked");
    if (themeMode === "light") {
      darkMode();
    } else {
      lightMode();
    }
  };
  // let SearchTxt = "KFC";
  return (
    <div className="flex justify-between items-center sticky top-0 h-16 p-5 bg-blue-800 text-white shadow-lg dark:bg-neutral-900">
      <Heading />
      <div className="flex items-center">
        <ul className="flex font-bold">
          <Link to="/">
            <li className="p-2 cursor-pointer"> HOME</li>
          </Link>
          <Link to="/About">
            <li className="p-2 cursor-pointer">ABOUT US</li>
          </Link>
          <Link to="/Contact">
            <li className="p-2 cursor-pointer">CONTACT US</li>
          </Link>
          <Link to="/Cart">
            <li className="p-2 cursor-pointer">CART - {cartItems.length} </li>
          </Link>
        </ul>
        <button
          className="bg-white text-neutral-800 font-bold w-6 h-9 ml-4 rounded-md"
          onClick={() => themeChangeBtn()}
        >
          L
        </button>
        {/* <p>{isOnline ? "🟢" : "🔴"}</p> */}
        {isLoggedIn ? (
          <button
            className="bg-white text-neutral-800 font-bold w-24 h-9 ml-4 rounded-md"
            onClick={() => {
              setisLoggedIn(false);
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-white text-neutral-800 font-bold w-24 h-9 ml-4 rounded-md"
            onClick={() => {
              setisLoggedIn(true);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
