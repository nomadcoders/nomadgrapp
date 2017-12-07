import React from "react";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import NavButton from "../components/NavButton";

const sharedRoutes = {
  Likes: {
    screen: LikesScreen
  },
  Comments: {
    screen: CommentsScreen
  }
};

const sharedOptions = {
  navigationOptions: {
    headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
    headerStyle: {
      backgroundColor: "#FBFBFB"
    }
  }
};

export { sharedOptions };

export default sharedRoutes;
