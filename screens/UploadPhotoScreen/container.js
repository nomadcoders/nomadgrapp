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
  _submit = async () => {
    const { caption, location, tags } = this.state;
    const {
      submit,
      navigation,
      navigation: { state: { params: { url } } }
    } = this.props;
    if (caption && location && tags) {
      this.setState({
        isSubmitting: true
      });
      const uploadResult = await submit(url, caption, location, tags);
      if (uploadResult) {
        navigation.goBack(null);
        navigation.goBack(null);
        navigation.goBack(null);
      }
    } else {
      Alert.alert("All fields are required");
    }
  };
}

export default Container;
