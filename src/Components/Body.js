// import { RestaurantsList } from "../Config";
import RestaurantsCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../Config";
import { filterData } from "../../Utility/Helper_Functions";

const Body = ({ user }) => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    //CALL API
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const Data = await fetch(RESTAURANT_API);
    const json = await Data.json();
    // console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!AllRestaurants) return null;
  return AllRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="h-full dark:bg-neutral-800">
      <div className="w-[70%] ml-[20%]">
        <div className="flex p-5">
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-slate-400 block bg-white w-3/5 border border-slate-300 rounded-md h-10 ml-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-950 focus:ring-blue-950 focus:ring-1 sm:text-sm dark:bg-neutral-700 dark:focus:border-neutral-300 dark:focus:ring-neutral-300 dark:border-neutral-500 dark:placeholder:text-neutral-200"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-white text-blue-950 border-2 border-blue-950 font-bold w-24 h-10 rounded-md ml-3 hover:bg-blue-950 hover:text-white dark:bg-neutral-700 dark:text-white dark:border-neutral-500 dark:hover:bg-neutral-600"
            onClick={() => {
              const Data = filterData(SearchText, AllRestaurants);
              setFilteredRestaurants(Data);
            }}
          >
            Search
          </button>
          <button
            className="bg-white text-blue-950 border-2 border-blue-950 font-bold w-24 h-10 rounded-md ml-2 hover:bg-blue-950 hover:text-white dark:bg-neutral-700 dark:text-white dark:border-neutral-500 dark:hover:bg-neutral-600"
            onClick={() => {
              const topRated = FilteredRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              );
              setFilteredRestaurants(topRated);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {FilteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {" "}
              <RestaurantsCard
                {...restaurant.info} /*user={user} Prop Drilling*/
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
