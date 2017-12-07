import React, { Component } from "react";
import FeedScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";

class Container extends Component {
  render() {
    return <FeedScreen {...this.props} />;
  }
}

export default Container;
