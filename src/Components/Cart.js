import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearAll } from "../../Utility/CartSlice";
import FootItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearAllItems = () => {
    dispatch(clearAll());
  };

  return cartItems.length === 0 ? (
    <div className="w-screen h-screen dark:bg-neutral-800">
      <h1 className="font-bold text-4xl text-center text-blue-950 p-5 dark:text-neutral-200">
        Cart is Empty
      </h1>
    </div>
  ) : (
    <div className="w-full h-full dark:bg-neutral-800">
      <h1 className="font-bold text-4xl text-center text-blue-950 p-5 dark:text-neutral-200">
        Secure Checkpoint
      </h1>
      {cartItems.map((items) => (
        <FootItem key={items.id} {...items} />
      ))}
      <div className="flex p-5 align-middle justify-center">
        <button
          className="p-2 m-1 font-bold text-sm bg-blue-200 dark:bg-neutral-500 dark:text-white dark:border-neutral-500"
          onClick={() => clearAllItems()}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
