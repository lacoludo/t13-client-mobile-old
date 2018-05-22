import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  DrawerLayoutAndroid,
  ScrollView,
  TouchableOpacity,
  ListView,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import firebaseApp from "./firebaseApp";
import Nav from "./global_widgets/nav";
import Icon from "react-native-vector-icons/MaterialIcons";
// import logoWhite from "./../img/logoWhite.png";
// import image1 from "./../img/image1.jpg";
// import image2 from "./../img/image2.jpg";
// import image3 from "./../img/image3.jpg";
// import image4 from "./../img/image4.jpg";
// import image5 from "./../img/image5.jpg";
// import image6 from "./../img/image6.jpg";

const profiles = [
  {
    id: 1,
    name: "TeeJay",
    photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    skill1: "Singer",
    skill2: "Lyricist"
  },
  {
    id: 2,
    name: "MC Sai",
    photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    skill1: "Rapper",
    skill2: "Lyricist"
  },
  {
    id: 3,
    name: "SriMathumitha",
    photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    skill1: "Singer",
    skill2: "Lyricist"
  },
  {
    id: 4,
    name: "Gaji",
    photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    skill1: "Music producer",
    skill2: "Mix and mastering engineer"
  },
  {
    id: 1,
    name: "Pragathi Guruprasad",
    photo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    skill1: "Singer",
    skill2: "Songwriter"
  },
  {
    id: 2,
    name: "Kausi",
    skill1: "Beatmaker",
    skill2: "Audio engineer"
  },
  {
    id: 3,
    name: "Nerujan Sehasothy",
    skill1: "Singer",
    skill2: "Violinist"
  },
  {
    id: 4,
    name: "Redon",
    skill1: "10/11/2015",
    skill2: "7/27/2016"
  },
  {
    id: 6,
    name: "Hiphop Tamizha",
    skill1: "Rapper",
    skill2: "Beatmaker"
  },
  {
    id: 7,
    name: "Dagou",
    skill1: "7/17/2016",
    skill2: "9/24/2016"
  },
  {
    id: 8,
    name: "San Rafael",
    skill1: "2/5/2016",
    skill2: "1/18/2016"
  },
  {
    id: 9,
    name: "Wólka Pełkińska",
    skill1: "4/25/2016",
    skill2: "2/14/2016"
  },
  {
    id: 10,
    name: "Presnenskiy",
    skill1: "2/9/2016",
    skill2: "3/1/2016"
  }
];

export default class Index extends Component {
  constructor() {
    super();
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      itemDataSource: ds,
      dataRecentSearches: ds.cloneWithRows(profiles),
      dataRecentlyViewed: ds.cloneWithRows(profiles),
      dataYourFavorites: ds.cloneWithRows(profiles)
    };
    this.itemsRef = this.getRef().child("profiles");
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  componentWillMount() {
    this.getItems(this.itemsRef);
  }

  componentDidMount() {
    this.getItems(this.itemsRef);
  }

  componentDidMount() {
    this.props.actions.changeNav("dark");
    this.props.actions.setNav(this.props.navigator);

    this.props.close();
  }

  recentSearches(val) {
    return (
      <ImageBackground
        source={val.photo}
        resizeMode="stretch"
        style={{
          width: 330,
          height: 220,
          margin: 5,
          marginBottom: 30,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "#fff",
            fontSize: 30,
            fontWeight: "700"
          }}
        >
          {val.name}
        </Text>
        <Text
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "#fff",
            fontSize: 14,
            fontWeight: "600"
          }}
        >
          {val.skill1} - {val.skill2}
        </Text>
      </ImageBackground>
    );
  }

  recentlyViewed(val) {
    return (
      <ImageBackground
        source={val.photo}
        resizeMode="stretch"
        style={{
          width: 330,
          height: 220,
          margin: 5,
          marginBottom: 30,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "#fff",
            fontSize: 30,
            fontWeight: "700"
          }}
        >
          {val.name}
        </Text>
        <Text
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "#fff",
            fontSize: 14,
            fontWeight: "600"
          }}
        >
          {val.skill1} - {val.skill2}
        </Text>
      </ImageBackground>
    );
  }

  yourFavorites(val) {
    return (
      <ImageBackground
        source={val.photo}
        resizeMode="stretch"
        style={{
          width: 330,
          height: 220,
          margin: 5,
          marginBottom: 30,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "#fff",
            fontSize: 30,
            fontWeight: "700"
          }}
        >
          {val.name}
        </Text>
        <Text
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "#fff",
            fontSize: 14,
            fontWeight: "600"
          }}
        >
          {val.skill1} - {val.skill2}
        </Text>
      </ImageBackground>
    );
  }

  getItems(itemsRef) {
    itemsRef.on("value", snap => {
      let items = [];
      snap.forEach(child => {
        items.push({
          title: child.val().name,
          photo: child.val().photo,
          _key: child.key
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
    });
  }

  pressRow(item) {
    console.log(item);
  }

  renderRow(item) {
    return (
      <TouchableHighlight
        onPress={() => {
          this.pressRow();
        }}
      >
        <View>
          <Text>{item.title}</Text>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: item.photo }}
          />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              resizeMode="contain"
              style={{ width: 40, height: 40, marginLeft: 20, marginTop: 15 }}
            />
            <Text style={styles.main}>
              The first search engine for independent music
            </Text>
            <TouchableOpacity
              style={{
                margin: 10,
                marginTop: 60,
                marginLeft: 20,
                padding: 10,
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 18,
                width: 150
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "600"
                }}
              >
                Search musician
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Recent searches</Text>
            <ListView
              dataSource={this.state.itemDataSource}
              renderRow={this.renderRow}
            />
            <ListView
              dataSource={this.state.dataRecentSearches}
              renderRow={rowData => this.recentSearches(rowData)}
              horizontal={true}
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Recently viewed</Text>
            <ListView
              dataSource={this.state.dataRecentlyViewed}
              renderRow={rowData => this.recentlyViewed(rowData)}
              horizontal={true}
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Your favorites</Text>
            <ListView
              dataSource={this.state.dataYourFavorites}
              renderRow={rowData => this.yourFavorites(rowData)}
              horizontal={true}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            width: 60,
            borderWidth: 3,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            backgroundColor: "#000",
            borderRadius: 30,
            position: "absolute",
            bottom: 20,
            right: 20
          }}
        >
          <Icon name="search" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: 400
  },
  container2: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3"
  },
  title: {
    fontWeight: "400",
    fontSize: 20,
    color: "#333",
    margin: 20,
    marginBottom: 15
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  main: {
    fontSize: 25,
    textAlign: "left",
    color: "#fff",
    fontWeight: "600",
    width: 200,
    margin: 10,
    marginLeft: 20,
    marginTop: 30
  },
  instructions: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 5
  }
});
