import React, { Component } from "react";
import SearchScreen from "./presenter";
import SearchBar from "../../components/SearchBar";

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: <SearchBar submit={text => params.submitSearch(text)} />
    };
  };
  state = {
    searchingBy: ""
  };
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      submitSearch: this._submitSearch
    });
  }
  render() {
    return <SearchScreen {...this.state} />;
  }
  _submitSearch = text => {
    const { searchingBy } = this.state;
    this.setState({
      searchingBy: text
    });
    // call api and search by hashtag
  };
}
export default Container;
