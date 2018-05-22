import React, { Component } from "react";
import EachMessage from "./inbox_widgets/eachMessage";
import TitleBar from "./inbox_widgets/titleBar";
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Image,
  ScrollView,
  View
} from "react-native";
// import image1 from "./../img/image1.jpg";
// import image2 from "./../img/image2.jpg";
// import image3 from "./../img/image3.jpg";
// import image4 from "./../img/image4.jpg";
// import image5 from "./../img/image5.jpg";
// import image6 from "./../img/image6.jpg";

const past = [
  {
    id: 1,
    name: "Florianópolis",
    photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    skill1: "Singer",
    skill2: "Lyricist"
  },
  {
    id: 2,
    name: "Karangkeng",
    photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    skill1: "Singer",
    skill2: "Lyricist"
  },
  {
    id: 3,
    name: "Lijia",
    photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    skill1: "Singer",
    skill2: "Lyricist"
  }
];

const current = {
  id: 1,
  name: "TeeJay",
  photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
  skill1: "Singer",
  skill2: "Lyricist"
};

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Inbox extends Component {
  constructor(props) {
    super(props);
    this.props.actions.changeNav("light");

    this.state = {
      dataSource: ds.cloneWithRows(past)
    };
  }
  componentDidMount() {
    this.props.close();
  }

  renderThis(val) {
    return (
      <Image
        source={val.photo}
        style={{
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center"
        }}
        resizeMode="stretch"
      >
        <Text
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "#fff",
            fontWeight: "700",
            fontSize: 24
          }}
        >
          {val.name}
        </Text>
        <Text
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "#fff",
            fontWeight: "400",
            fontSize: 14
          }}
        >
          {val.skill1} - {val.skill2}
        </Text>
      </Image>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TitleBar name="Favorites" sub="Don't miss out on updates" />
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#e3e3e3",
            paddingBottom: 30
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "#222",
              margin: 20,
              marginLeft: 5,
              fontWeight: "300"
            }}
          >
            Recent updates
          </Text>
          {this.renderThis(current)}
        </View>
        <Text
          style={{
            fontSize: 24,
            color: "#222",
            margin: 20,
            marginLeft: 5,
            fontWeight: "300"
          }}
        >
          All your favorites
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={val => this.renderThis(val)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
