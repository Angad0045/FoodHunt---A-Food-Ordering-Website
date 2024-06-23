import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ImgCDM } from "../Config";
import Shimmer_1 from "./Shimmer_1";
import useRestaurantMenu from "../../Utility/useRestaurant_Menu";
import { addItems, removeItems } from "../../Utility/CartSlice";
//useParams HELPS US TO READ DYNAMIC URL

const RestaurantDetail = () => {
  const { id } = useParams();

  const Restaurant = useRestaurantMenu(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItems(item));
  };

  const removeFoodItem = () => {
    dispatch(removeItems());
  };

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    Restaurant?.cards[2]?.card?.card?.info ?? {};

  const { itemCards } =
    Restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card
      ?.card ?? {};
  console.log(itemCards);

  if (Restaurant === null) return <Shimmer_1 />;
  return (
    <div className="dark:bg-neutral-800 p-5">
      <div className="w-[80%] h-[250px] flex justify-between items-center ml-[10%]  px-[20px] bg-blue-50 shadow-md rounded-md dark:bg-neutral-600">
        <div className="">
          <h1 className="font-bold text-4xl text-blue-800 dark:text-neutral-200">
            {name}
          </h1>
          <h3 className="font-bold text-2xl text-blue-950 dark:text-neutral-300">
            {cuisines.join(", ")}
          </h3>
          <h3 className="dark:text-neutral-400">{costForTwoMessage}</h3>
        </div>
        <img
          className="w-52 h-52 rounded-xl"
          src={ImgCDM + cloudinaryImageId}
        />
      </div>
      <div className="w-[70%] ml-[15%] px-[20px] py-[10px]">
        <h1 className="font-bold text-3xl text-blue-800 dark:text-neutral-200">
          MENU
        </h1>
        {itemCards?.card?.info?.name}
        <ul>
          {itemCards?.map((item) => (
            <li className="m-4 p-3 font-bold text-2xl rounded-md text-justify flex justify-between bg-blue-50 shadow-md dark:bg-neutral-600">
              <div className="dark:text-neutral-200">
                {item?.card?.info?.name} - {item?.card?.info?.price / 100} Rs
                <span className="mx-2">
                  {item?.card?.info?.isVeg ? "🟢" : "🔴"}
                </span>
                <p className="w-[70%] text-xs m-2 dark:text-neutral-400">
                  {item?.card?.info?.description}
                </p>
                <div>
                  <button
                    className="p-2 m-1 text-sm font-bold bg-blue-200 dark:bg-neutral-700 dark:text-white dark:border-neutral-500"
                    onClick={() => addFoodItem(item?.card?.info)}
                  >
                    Add
                  </button>
                  <button
                    className="p-2 m-1 text-sm font-bold bg-blue-200 dark:bg-neutral-700 dark:text-white dark:border-neutral-500"
                    onClick={() => removeFoodItem()}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <img
                className="w-32 h-32 object-contain"
                src={ImgCDM + item?.card?.info?.imageId}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetail;
