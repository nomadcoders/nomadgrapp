import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { photos: { search } } = state;
  return {
    search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getEmptySearch: () => {
      dispatch(photoActions.getSearch());
    },
    searchHashtag: hashtag => {
      dispatch(photoActions.searchByHashtag(hashtag));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
