import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "../../components/Profile";

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.user.username
  });
  constructor(props) {
    super(props);
    const { navigation: { state: { params: { user } } } } = props;
    this.state = {
      profileObject: user
    };
  }
  componentDidMount = () => {
    const { getProfile } = this.props;
    const { profileObject: { username } } = this.state;
    getProfile(username);
  };
  render() {
    const { profileObject } = this.state;
    return <Profile {...this.state} />;
  }
}

export default Container;
