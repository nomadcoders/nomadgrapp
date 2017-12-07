import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavButton = props => (
  <TouchableWithoutFeedback onPressOut={props.onPress}>
    <View style={styles.container}>
      <Ionicons name={props.iconName} color={"black"} size={30} />
    </View>
  </TouchableWithoutFeedback>
);

NavButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
});

export default NavButton;
