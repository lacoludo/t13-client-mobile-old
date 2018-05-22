export const LOGIN = "LOGIN";
export const NAV = "NAV";
export const CHANGE_NAV_STYLE = "CHANGE_NAV_STYLE";
export const NAV_TO_POP = "NAV_TO_POP";
export const NAVTO = "NAVTO";

export const login = (navProps, res) => {
  return {
    type: LOGIN,
    nav: navProps,
    data: res
  };
}

export const setNav = (nav) => {
  return {
    type: NAV,
    navigator: nav
  };
}

export const changeNav = (props) => {
  return {
    type: CHANGE_NAV_STYLE,
    prop: props
  };
}

export const navToPop = (props) => {
  return {
    type: NAV_TO_POP,
    name: props
  };
}

export const navigate = (id) => {
  return {
    type: NAVTO,
    props: id
  };
}
