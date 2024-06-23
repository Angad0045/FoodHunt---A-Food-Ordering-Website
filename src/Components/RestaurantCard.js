import { useContext } from "react";
import { ImgCDM } from "../Config";
import UserContext from "../UserContext";

const BurgerKing = {
  name: "Burger King",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusines: ["Burger", "American"],
  rating: "4.2",
};

// const RestaurantsCard = () => {
//   return (
//     <div className="card">
//       {/* <img src="./Images/Burger_King.png" /> */}
//       <img src={BurgerKing.image} />
//       <h1>{BurgerKing.name}</h1>
//       <p>{BurgerKing.cusines.join(", ")}</p>
//       <p>{BurgerKing.rating} Stars</p>
//     </div>
//   );
// };

// const RestaurantsCard = ({restaurant}) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           restaurant.info?.cloudinaryImageId
//         }
//       />
//       <h1>{restaurant.info?.name}</h1>
//       <h4>{restaurant.info?.cuisines.join(", ")}</h4>
//       <p>{restaurant.info?.avgRating} Stars</p>
//       <p>{restaurant.info?.areaName}</p>
//     </div>
//   );
// };

const RestaurantsCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  areaName,
  // user     Prop Drilling
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-52 h-80 m-5 p-2 bg-blue-50 shadow-sm text-center whitespace-nowrap hover:shadow-lg dark:bg-neutral-600">
      <img className="w-[100%] h-[60%]  " src={ImgCDM + cloudinaryImageId} />
      <h1 className="font-bold text-2xl text-ellipsis overflow-hidden dark:text-neutral-200">
        {name}
      </h1>
      <h3 className="text-ellipsis overflow-hidden font-semibold dark:text-neutral-300">
        {cuisines.join(", ")}
      </h3>
      <h2 className="dark:text-neutral-400">{avgRating} Stars</h2>
      <p className="text-ellipsis overflow-hidden dark:text-neutral-400">
        {areaName}
      </p>
      {/* <p>{user.Name}</p> */}
      {/* <p className="text-ellipsis overflow-hidden">{user.Name}</p> */}
    </div>
  );
};

export default RestaurantsCard;
