import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import PropTypes from "prop-types";
import FitImage from "react-native-fit-image";
import { MaterialIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const LibraryScreen = props => (
  <View style={styles.container}>
    <StatusBar hidden={true} />
    {props.photos && (
      <View style={styles.pictureContainer}>
        <FitImage source={{ uri: props.pickedPhoto.node.image.uri }} />
        <TouchableOpacity onPress={props.approvePhoto}>
          <View style={styles.action}>
            <MaterialIcons name="check-circle" color="white" size={40} />
          </View>
        </TouchableOpacity>
      </View>
    )}
    {props.photos && (
      <View style={styles.photos}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {props.photos.map((photo, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => props.pickPhoto(photo)}
            >
              <Image
                source={{ uri: photo.node.image.uri }}
                style={styles.smallPhoto}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    )}
  </View>
);

LibraryScreen.propTypes = {
  pickedPhoto: PropTypes.object,
  photos: PropTypes.array,
  approvePhoto: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pictureContainer: {
    flex: 2
  },
  photos: {
    flex: 1
  },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  smallPhoto: {
    width: width / 3,
    height: width / 3
  },
  action: {
    backgroundColor: "transparent",
    height: 40,
    width: 40,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10
  }
});

export default LibraryScreen;
