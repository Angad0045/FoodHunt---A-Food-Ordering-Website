import { useState, useEffect } from "react";
import { MENU_API_CDM } from "../src/Config";

const useRestaurantMenu = (id) => {
  const [Restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const Data = await fetch(MENU_API_CDM + id);
    const json = await Data.json();
    setRestaurant(json.data);
  }
  return Restaurant;
};

export default useRestaurantMenu;
// console.log(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
