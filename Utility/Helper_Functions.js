export function filterData(SearchText, Restaurants) {
  const filteredData = Restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
  );
  return filteredData;
}
