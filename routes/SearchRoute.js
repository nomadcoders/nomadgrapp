import { StackNavigator } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const SearchRoute = StackNavigator(
  {
    Search: {
      screen: SearchScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default SearchRoute;
