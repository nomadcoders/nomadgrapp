import { TabNavigator } from "react-navigation";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";

const AddPhotoNavigation = TabNavigator(
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: "Photo"
      }
    },
    Library: {
      screen: LibraryScreen,
      navigationOptions: {
        tabBarLabel: "Library"
      }
    }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      upperCaseLabel: true,
      activeTintColor: "black",
      inactiveTintColor: "#bbb",
      style: {
        backgroundColor: "white",
        alignItems: "center"
      },
      labelStyle: {
        fontSize: 14,
        fontWeight: "600"
      },
      showIcon: false
    }
  }
);

export default AddPhotoNavigation;
