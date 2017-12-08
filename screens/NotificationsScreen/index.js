import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user: { notifications } } = state;
  return { notifications };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotifications: () => {
      dispatch(userActions.getNotifications());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
