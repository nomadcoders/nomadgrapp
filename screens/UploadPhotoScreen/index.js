import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submit: (file, caption, location, tags) => {
      return dispatch(photoActions.uploadPhoto(file, caption, location, tags));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
