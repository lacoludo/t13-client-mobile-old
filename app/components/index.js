import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import Drawer from "react-native-drawer";
import { Navigator } from "react-native-deprecated-custom-components";
import * as actions from "./../actions/actions";
import Nav from "./global_widgets/nav";
import ControlPanel from "./controlPanel";
import Search from "./search";
import Home from "./home";
import Inbox from "./inbox";
import Convo from "./each_convo";
import Favorites from "./favorites";
import Profile from "./profile";
import Settings from "./settings";

const drawerRef = {
  close: () => console.log("close"),
  open: () => console.log("open")
};

connect(state => ({
  state: state.seven
}));

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    drawerRef = this.refs.drawer;
  }
  closeControlPanel() {
    drawerRef.close();
  }
  openControlPanel() {
    drawerRef.open();
  }

  renderScene(route, navigator) {
    const { state, actions } = this.props;
    const routeId = route.id;
    if (routeId === "search") {
      return (
        <Search
          {...this.props}
          close={() => this.closeControlPanel()}
          navigator={navigator}
        />
      );
    }
    if (routeId === "home") {
      return (
        <Home
          {...this.props}
          userData={route.userData}
          close={() => this.closeControlPanel()}
          navigator={navigator}
        />
      );
    }
    if (routeId === "inbox") {
      return (
        <Inbox
          {...this.props}
          data={route.data}
          close={() => this.closeControlPanel()}
          navigator={navigator}
        />
      );
    }
    if (routeId === "convo") {
      return (
        <Convo
          {...this.props}
          data={route.data}
          close={() => this.closeControlPanel()}
          navigator={navigator}
        />
      );
    }
    if (routeId === "favorites") {
      return (
        <Favorites
          {...this.props}
          close={() => this.closeControlPanel()}
          navigator={navigator}
        />
      );
    }
    if (routeId === "profile") {
      return (
        <Profile
          {...this.props}
          data={route.data}
          close={() => this.closeControlPanel()}
          navigator={navigator}
        />
      );
    }
    if (routeId === "settings") {
      return (
        <Settings
          {...this.props}
          close={() => this.closeControlPanel()}
          navigator={navigator}
        />
      );
    }
  }

  render() {
    const { state, actions } = this.props;
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <Drawer
          ref="drawer"
          tapToClose={true}
          type="overlay"
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          content={
            <ControlPanel
              {...this.props}
              onPress={() => this.closeControlPanel()}
            />
          }
        >
          <Nav
            {...this.props}
            pop={() => this.refs.NAV}
            onPress={() => this.openControlPanel()}
          />
          <Navigator
            style={{ flex: 1 }}
            ref={"NAV"}
            initialRoute={{ id: "home", name: "home" }}
            renderScene={this.renderScene.bind(this)}
          />
        </Drawer>
      </View>
    );
  }
}

export default connect(
  state => ({
    state: state.t13
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Root);
