import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationsScreen from "./presenter";
import { Notifications } from "expo";

class Container extends Component {
  static propTypes = {
    notifications: PropTypes.array,
    getNotifications: PropTypes.func.isRequired
  };
  state = {
    isFetching: false
  };
  static defaultProps = {
    notifications: []
  };

  componentDidMount = () => {
    Notifications.setBadgeNumberAsync(0);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.notifications) {
      this.setState({ isFetching: false });
    }
  };

  render() {
    return (
      <NotificationsScreen
        {...this.props}
        {...this.state}
        refresh={this._refresh}
      />
    );
  }
  _refresh = () => {
    const { getNotifications } = this.props;
    this.setState({
      isFetching: true
    });
    getNotifications();
  };
}

export default Container;
