import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    dispatchLike: isLiked => {
      if (isLiked) {
        return dispatch(photoActions.unlikePhoto(id));
      } else {
        return dispatch(photoActions.likePhoto(id));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
