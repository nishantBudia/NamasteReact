import { dummyRestaurantList } from "../constants/HomePageConstants";

export const getAllRestaurantCards = (restaurantList) => {
  return restaurantList.map((restaurantCardData) => {
    return (
      <RestaurantCard key={restaurantCardData.id} data={restaurantCardData} />
    );
  });
};

export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {getAllRestaurantCards(dummyRestaurantList)}
      </div>
    </div>
  );
};

export const RestaurantCard = ({ data }) => {
  return (
    <div className="restaurant-card">
      <img
        src={data.imageUrl}
        alt="restaurant-image"
        className="restaurant-card-image"
      ></img>
      <h3 className="restaurant-card-title">{data.title}</h3>
      <h4 className="restaurant-card-cuisines">{data.cuisines.join(", ")}</h4>
      <h4 className="restaurant-card-rating">{data.rating + " stars"}</h4>
      <h4 className="restaurant-card-time">
        {data.timetoDeliver + " minutes"}
      </h4>
    </div>
  );
};
