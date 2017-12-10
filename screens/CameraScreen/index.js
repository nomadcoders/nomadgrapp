import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  CameraRoll
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera, Permissions } from "expo";

class CameraScreen extends Component {
  state = {
    hasCameraPermissions: null,
    type: Camera.Constants.Type.back,
    flash: Camera.Constants.FlashMode.off,
    pictureTaken: false,
    picture: null
  };

  componentWillMount = async () => {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: camera.status === "granted"
    });
  };

  render() {
    const { hasCameraPermissions, type, flash } = this.state;
    if (hasCameraPermissions === null) {
      return <View />;
    } else if (hasCameraPermissions === false) {
      return <Text>No Access to Camera, check your settings</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera
            type={type}
            flashMode={flash}
            ref={camera => (this.camera = camera)}
            style={styles.camera}
          >
            <TouchableOpacity>
              <View style={styles.action}>
                <MaterialIcons
                  name={
                    type === Camera.Constants.Type.back
                      ? "camera-front"
                      : "camera-rear"
                  }
                  color="white"
                  size={40}
                />
              </View>
            </TouchableOpacity>
          </Camera>
          <View style={styles.btnContainer}>
            <TouchableOpacity>
              <View style={styles.btn} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  camera: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderColor: "#bbb",
    borderWidth: 15,
    borderRadius: 50
  },
  action: {
    backgroundColor: "transparent",
    height: 40,
    width: 40,
    margin: 10
  }
});

export default CameraScreen;
