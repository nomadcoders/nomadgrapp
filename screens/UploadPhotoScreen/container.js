import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import UploadPhotoScreen from "./presenter";

class Container extends Component {
  state = {
    caption: "",
    location: "",
    tags: "",
    isSubmitting: false
  };
  render() {
    const { navigation: { state: { params: { url } } } } = this.props;
    return (
      <UploadPhotoScreen
        onCaptionChange={this._onCaptionChange}
        onLocationChange={this._onLocationChange}
        onTagsChange={this._onTagsChange}
        submit={this._submit}
        imageURL={url}
        {...this.state}
      />
    );
  }
  _onCaptionChange = text => {
    this.setState({
      caption: text
    });
  };
  _onLocationChange = text => {
    this.setState({
      location: text
    });
  };
  _onTagsChange = text => {
    this.setState({
      tags: text
    });
  };
  _submit = () => {
    const { caption, location, tags } = this.state;
    if (caption && location && tags) {
      this.setState({
        isSubmitting: true
      });
    } else {
      Alert.alert("All fields are required");
    }
  };
}

export default Container;
