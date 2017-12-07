import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends Component {
  render() {
    return <Photo {...this.props} />;
  }
}

export default Container;
