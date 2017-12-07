import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import FadeIn from "react-native-fade-in-image";

const Photo = props => (
  <View>
    <TouchableOpacity>
      <View>
        <FadeIn>
          <Image
            source={
              props.creator.profile_image
                ? {
                    uri: props.creator.profile_image
                  }
                : require("../../assets/images/noPhoto.jpg")
            }
          />
        </FadeIn>
      </View>
      <View>
        <Text>{props.creator.username}</Text>
        {props.location && <Text>{props.location}</Text>}
      </View>
    </TouchableOpacity>
    <FadeIn>
      <Image source={{ uri: props.file }} />
    </FadeIn>
    <View>
      <View>
        <Text>
          {props.creator.username}
          <Text>{props.caption}</Text>
        </Text>
      </View>
      {props.comments.length > 0 && (
        <View>
          <TouchableOpacity>
            {props.comments.length === 1 ? (
              <Text>View 1 comment</Text>
            ) : (
              <Text>View all {props.comments.length} comments</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
      <Text>{props.natural_time}</Text>
    </View>
  </View>
);

Photo.propTypes = {
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
};

export default Photo;
