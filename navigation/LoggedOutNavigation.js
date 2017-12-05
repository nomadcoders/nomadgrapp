import { StackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";

const LoggedOutNavigation = StackNavigator({
  LogIn: {
    screen: LogInScreen
  }
});

export default LoggedOutNavigation;
