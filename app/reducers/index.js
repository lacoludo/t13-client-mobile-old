import React, {
  Component,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import { combineReducers } from "redux";
import {
  LOGIN,
  NAV,
  CHANGE_NAV_STYLE,
  NAV_TO_POP,
  NAVTO
} from "../actions/actions";

let userData;

const initialState = {
  navColor: "#fff",
  navStyle: { backgroundColor: "#000", color: "#fff", padding: 20 },
  userDeets: {
    email: "email@lacoludo.com",
    first_name: "Ludovic",
    last_name: "Lacouture",
    image:
      "https://media.licdn.com/dms/image/C4E03AQHZ5kAxawJlog/profile-displayphoto-shrink_200_200/0?e=1526684400&v=alpha&t=uHoND5Ek9KGttk6QiTY71wEpwfRqmfLWvnq7RVMNKi8"
  },
  favorites: {},
  listings: {},
  navigator: "",
  navProps: {
    name: "",
    type: "menu",
    icon: "menu"
  }
};

// const navigation = (state = initialState, action) => {
export const t13 = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userDeets: userData
      };
    case NAV:
      return {
        ...state,
        navigator: action.navigator
      };
    case NAVTO:
      state.navigator.replace({
        id: action.props,
        name: action.props
      });
      return {
        ...state,
        openMenu: false
      };
    case NAV_TO_POP:
      return {
        ...state,
        navProps: {
          name: action.name,
          type: "pop",
          icon: "arrow-back"
        }
      };
    case CHANGE_NAV_STYLE:
      if (action.prop === "light") {
        return {
          ...state,
          navStyle: {
            backgroundColor: "#fff",
            color: "#444"
          },
          navProps: {
            name: "",
            type: "menu",
            icon: "menu"
          }
        };
      } else if (action.prop === "dark") {
        return {
          ...state,
          navStyle: {
            backgroundColor: "#000",
            color: "#fff"
          },
          navProps: {
            name: "",
            type: "menu",
            icon: "menu"
          }
        };
      }
    default:
      return state;
  }
};

// const t13 = combineReducers({
//   navigation
// });

// export default t13;
