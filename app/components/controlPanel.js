import React, { Component } from "react";
import { View, TouchableOpacity, Text, ListView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import EachComp from "./control_widgets/eachNav";
import Profile from "./control_widgets/userBlock";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const eachNav = [
  {
    icon: "ios-search",
    name: "Search",
    route: "search"
  },
  {
    icon: "ios-home-outline",
    name: "Home",
    route: "home"
  },
  {
    icon: "ios-chatboxes-outline",
    name: "Inbox",
    route: "inbox"
  },
  {
    icon: "ios-heart-outline",
    name: "Favorites",
    route: "favorites"
  },
  {
    icon: "ios-person-outline",
    name: "Profile",
    route: "profile"
  },
  {
    icon: "ios-settings-outline",
    name: "Settings",
    route: "settings"
  }
];

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(eachNav)
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "rgba(255,255,255,0.93)", flex: 1 }}>
        <Profile {...this.props} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <EachComp icon={rowData.icon} route={rowData.route} {...this.props}>
              {rowData.name}
            </EachComp>
          )}
        />
      </View>
    );
  }
}
