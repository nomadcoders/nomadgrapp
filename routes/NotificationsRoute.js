import { StackNavigator } from "react-navigation";
import NotificationsScreen from "../screens/NotificationsScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const NotificationsRoute = StackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default NotificationsRoute;
