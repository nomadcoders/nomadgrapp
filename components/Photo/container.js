import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: props.is_liked,
      likeCount: props.like_count
    };
  }
  static propTypes = {
    dispatchLike: PropTypes.func.isRequired
  };
  render() {
    return (
      <Photo handlePress={this._handlePress} {...this.props} {...this.state} />
    );
  }
  _handlePress = () => {
    const { dispatchLike } = this.props;
    const { isLiked } = this.state;
    dispatchLike(isLiked);
    if (isLiked) {
      this.setState(prevState => {
        return {
          isLiked: false,
          likeCount: prevState.likeCount - 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          isLiked: true,
          likeCount: prevState.likeCount + 1
        };
      });
    }
  };
}

export default Container;
