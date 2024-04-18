import { DEFAULT_NAVIGATION_ITEMS } from "../constants/HomePageConstants";
import { MAIN_APP_LOGO } from "../constants/HomePageConstants";

export const NavigationItem = ({ item }) => {
  return <div className="nav-item-container">{item}</div>;
};

export const NavigationItems = () => {
  return (
    <ul>
      {DEFAULT_NAVIGATION_ITEMS.map((item) => {
        return (
          <li key={item}>
            <NavigationItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={MAIN_APP_LOGO} />
      </div>
      <div className="nav-items">
        <NavigationItems />
      </div>
    </div>
  );
};
