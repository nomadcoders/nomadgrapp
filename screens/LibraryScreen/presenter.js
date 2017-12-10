import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import FitImage from "react-native-fit-image";

const { height, width } = Dimensions.get("window");

const LibraryScreen = props => (
  <View style={styles.container}>
    {props.photos && (
      <View style={styles.pictureContainer}>
        <FitImage source={{ uri: props.pickedPhoto.node.image.uri }} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pictureContainer: {
    flex: 2,
    justifyContent: "center"
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
  }
});

export default LibraryScreen;
