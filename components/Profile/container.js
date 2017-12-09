import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  static propTypes = {
    profileObject: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired
  };
  state = {
    isFetching: true,
    mode: "grid"
  };
  componentDidMount = () => {
    const { profileObject } = this.props;
    if (profileObject) {
      this.setState({
        isFetching: false
      });
    }
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.profileObject) {
      this.setState({
        isFetching: false
      });
    }
  };
  render() {
    return (
      <Profile
        {...this.props}
        {...this.state}
        changeToList={this._changeToList}
        changeToGrid={this._changeToGrid}
      />
    );
  }
  _changeToList = () => {
    this.setState({
      mode: "list"
    });
  };
  _changeToGrid = () => {
    this.setState({ mode: "grid" });
  };
}

export default Container;
