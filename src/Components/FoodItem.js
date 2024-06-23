import { ImgCDM } from "../Config";
import { useDispatch } from "react-redux";
import { removeItems } from "../../Utility/CartSlice";

const FootItem = ({ imageId, name, description, price, isVeg }) => {
  const dispatch = useDispatch();
  const removeFoodItem = () => {
    dispatch(removeItems());
  };

  return (
    <div className="w-[70%] ml-[15%] p-2">
      <div className="m-4 p-3 rounded-md text-justify flex justify-between items-center bg-blue-50 shadow-md dark:bg-neutral-600">
        <div>
          <span className="font-bold text-2xl text-blue-950 dark:text-neutral-200">
            {name}
          </span>
          <span className="m-1 font-bold text-2xl ">{isVeg ? "🟢" : "🔴"}</span>
          <p className="w-[70%] text-xs m-2 dark:text-neutral-400">
            {description}
          </p>
          <p className="font-bold text-blue-950 m-2 dark:text-neutral-400">
            Cost - Rs {price / 100}
          </p>
          <button
            className="p-2 m-1 font-bold text-sm bg-blue-200 dark:bg-neutral-700 dark:text-white dark:border-neutral-500"
            onClick={() => removeFoodItem()}
          >
            Remove
          </button>
        </div>
        <img
          className="w-32 h-32 mr-3 rounded-xl object-contain"
          src={ImgCDM + imageId}
        />
      </div>
    </div>
  );
};

export default FootItem;
