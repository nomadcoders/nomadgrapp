import React from "react";
import { View } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";
import { Ionicons } from "@expo/vector-icons";

const TabsNavigation = TabNavigator(
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-home" : "ios-home-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    Search: {
      screen: SearchRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-search" : "ios-search-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    AddPhoto: {
      screen: View,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons name={"ios-add-circle-outline"} size={30} color={"black"} />
        )
      }
    },
    Notifications: {
      screen: NotificationsRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-heart" : "ios-heart-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-person" : "ios-person-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    }
  },
  {
    tabBarComponent: ({jumpToIndex, ...props, navigation}) => (
        <TabBarBottom
            {...props}
            jumpToIndex={index => {
                if(index === 2){
                    navigation.navigate("TakePhoto")
                } else {
                    jumpToIndex(index)
                }
            }}
        />
    ),
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#FBFBFB",
        height: 45
      }
    }
  }
);

export default TabsNavigation;
