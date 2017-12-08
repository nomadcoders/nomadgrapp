import React, { Component } from "react";
import PropTypes from "prop-types";
import Notification from "./presenter";

class Container extends Component {
  static propTypes = {};
  render() {
    console.log(this.props);
    return <Notification {...this.props} />;
  }
}

export default Container;
