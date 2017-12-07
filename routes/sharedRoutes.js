import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";

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
    headerStyle: {
      backgroundColor: "#FBFBFB"
    }
  }
};

export { sharedOptions };

export default sharedRoutes;
