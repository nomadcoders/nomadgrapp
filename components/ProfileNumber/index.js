import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProfileNumber = ({ onPress, number = 0, text }) => (
  <TouchableOpacity onPressOut={onPress}>
    <View style={styles.item}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ProfileNumber.propTypes = {
  onPress: PropTypes.func,
  number: PropTypes.number,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  item: {
    alignItems: "center"
  },
  number: {
    fontSize: 16,
    fontWeight: "600"
  },
  text: {
    fontSize: 12,
    color: "#999"
  }
});

export default ProfileNumber;
