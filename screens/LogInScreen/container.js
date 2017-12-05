import React, { Component } from "react";
import LogInScreen from "./presenter";

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Log In"
  });
  render() {
    return <LogInScreen />;
  }
}

export default Container;
