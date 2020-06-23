import React from "react"

export default React.createContext({
  active: 1,
  toggleSide: false,
  toggleActive: (state) => {},
  toggleSideNav: (state) => {},
})
