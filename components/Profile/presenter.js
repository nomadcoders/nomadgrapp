import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FadeIn from "react-native-fade-in-image";
import ProfileNumber from "../ProfileNumber";
import SquarePhoto from "../SquarePhoto";
import Photo from "../Photo";

const width = Dimensions.get("window").width;

const Profile = props => (
  <View style={styles.container}>
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.isFetching}
          onRefresh={props.getProfile}
          tintColor={"black"}
          titleColor={"black"}
        />
      }
    >
      <View style={styles.profile}>
        <View style={styles.header}>
          <TouchableOpacity onPressOut={props.showAS}>
            <Image
              source={
                props.profileObject.profile_image
                  ? {
                      uri: props.profileObject.profile_image
                    }
                  : require("../../assets/images/noPhoto.jpg")
              }
              style={styles.avatar}
              defaultSource={require("../../assets/images/noPhoto.jpg")}
            />
          </TouchableOpacity>
          <View style={styles.headerColumn}>
            <View style={styles.profileNumbers}>
              <ProfileNumber
                number={props.profileObject.post_count}
                text={"posts"}
              />
              <ProfileNumber
                number={props.profileObject.followers_count}
                text={"followers"}
              />
              <ProfileNumber
                number={props.profileObject.following_count}
                text={"following"}
              />
            </View>
            {props.profileObject.is_self ? (
              <TouchableOpacity>
                <View
                  style={[
                    styles.button,
                    { backgroundColor: "white" },
                    { borderColor: "black" },
                    { borderWidth: StyleSheet.hairlineWidth }
                  ]}
                >
                  <Text style={[styles.text, { color: "black" }]}>
                    Edit profile
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <View style={[styles.button, { backgroundColor: "#3e99ee" }]}>
                  <Text style={[styles.text, { color: "white" }]}>
                    {props.profileObject.following ? "Unfollow" : "Follow"}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.name}>{props.profileObject.name}</Text>
          <Text style={styles.bio}>{props.profileObject.bio}</Text>
          <TouchableOpacity>
            <Text style={styles.website}>{props.profileObject.website}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modeBar}>
          <TouchableOpacity onPressOut={props.changeToGrid}>
            <View style={styles.modeIcon}>
              <Ionicons
                name={"ios-grid-outline"}
                size={30}
                color={props.mode === "grid" ? "#3e99ee" : "black"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPressOut={props.changeToList}>
            <View style={styles.modeIcon}>
              <Ionicons
                name={"ios-list"}
                size={38}
                color={props.mode === "list" ? "#3e99ee" : "black"}
              />
            </View>
          </TouchableOpacity>
        </View>

        {props.mode === "grid" && (
          <View style={styles.photoContainer}>
            {props.profileObject.images &&
              props.profileObject.images.map(photo => (
                <SquarePhoto key={photo.id} imageURL={photo.file} />
              ))}
          </View>
        )}

        {props.mode === "list" &&
          props.profileObject.images &&
          props.profileObject.images.map(photo => (
            <Photo {...photo} key={photo.id} />
          ))}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  headerColumn: {
    width: width / 2
  },
  profileNumbers: {
    flexDirection: "row",
    marginBottom: 7,
    justifyContent: "space-between"
  },
  headerText: {
    paddingLeft: 15,
    paddingRight: 15
  },
  name: {
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 13
  },
  bio: {
    marginBottom: 5
  },
  website: {
    color: "#003569"
  },
  modeBar: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth
  },
  modeIcon: {
    width: width / 2,
    alignItems: "center"
  },
  button: {
    borderRadius: 3,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    fontWeight: "600",
    textAlign: "center"
  },
  photoContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

Profile.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  profileObject: PropTypes.shape({
    bio: PropTypes.string,
    followers_count: PropTypes.number,
    following_count: PropTypes.number,
    following: PropTypes.bool,
    is_self: PropTypes.bool,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        creator: PropTypes.shape({
          profile_image: PropTypes.string,
          username: PropTypes.string.isRequired
        }).isRequired,
        location: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
        like_count: PropTypes.number.isRequired,
        caption: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
              profile_image: PropTypes.string,
              username: PropTypes.string.isRequired
            }).isRequired
          })
        ).isRequired,
        natural_time: PropTypes.string.isRequired,
        is_liked: PropTypes.bool.isRequired,
        is_vertical: PropTypes.bool.isRequired
      })
    ),
    name: PropTypes.string,
    post_count: PropTypes.number,
    profile_image: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string
  }),
  changeToList: PropTypes.func.isRequired,
  changeToGrid: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["grid", "list"]).isRequired,
  showAS: PropTypes.func.isRequired
};

export default Profile;
