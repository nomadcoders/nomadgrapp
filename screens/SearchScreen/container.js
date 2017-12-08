import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchScreen from "./presenter";
import SearchBar from "../../components/SearchBar";

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: <SearchBar submit={text => params.submitSearch(text)} />
    };
  };
  static propTypes = {
    getEmptyFeed: PropTypes.func.isRequired,
    searchHashtag: PropTypes.func.isRequired,
    search: PropTypes.array
  };
  state = {
    searchingBy: "",
    isFetching: false
  };
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      submitSearch: this._submitSearch
    });
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.search) {
      this.setState({
        isFetching: false
      });
    }
  };

  render() {
    return (
      <SearchScreen {...this.state} {...this.props} refresh={this._refresh} />
    );
  }
  _submitSearch = text => {
    const { searchingBy } = this.state;
    const { searchHashtag } = this.props;
    this.setState({
      searchingBy: text,
      isFetching: true
    });
    searchHashtag(text);
  };
  _refresh = () => {
    const { searchingBy } = this.state;
    const { getEmptyFeed, searchHashtag } = this.props;
    if (searchingBy === "") {
      getEmptyFeed();
    } else {
      searchHashtag(searchingBy);
    }
  };
}
export default Container;
