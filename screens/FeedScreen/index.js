import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(photoActions.getFeed());
    },
    initApp: () => {
      dispatch(photoActions.getFeed());
      dispatch(photoActions.getSearch());
      dispatch(userActions.getNotifications());
      dispatch(userActions.getOwnProfile());
      dispatch(userActions.registerForPush());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
