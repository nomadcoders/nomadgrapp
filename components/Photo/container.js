import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends Component {
  static propTypes = {
    dispatchLike: PropTypes.func.isRequired
  };
  render() {
    return <Photo {...this.props} />;
  }
}

export default Container;
