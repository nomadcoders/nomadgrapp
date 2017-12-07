import { StackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";

const RootNavigation = StackNavigator(
  {
    TakePhoto: {
      screen: TakePhotoScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: "modal"
  }
);

export default RootNavigation;
