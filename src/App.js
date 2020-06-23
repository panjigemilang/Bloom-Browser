import React, { lazy, Suspense } from "react"
import IndexContext from "./Context/IndexContext"
import "./App.css"
import { Route, BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"

// Utils
import { lightTheme } from "./Components/utils/Styled"
import { GlobalStyles } from "./Components/utils/GlobalStyles"
import Loading from "./Components/utils/Loading"

// Layouts
import Navbar from "./Components/layouts/Navbar"
import Footer from "./Components/layouts/Footer"

// Components
const Landing = lazy(() => import("./Components/pages/Landing"))

export default class App extends React.Component {
  state = {
    active: 1,
    toggleSide: false,
  }

  toggleActiveNav = (number) => {
    this.setState({
      active: number,
    })
  }

  toggleSideNav = () => {
    this.setState({
      toggleSide: !this.state.toggleSide,
    })
  }

  render() {
    return (
      <Router>
        <IndexContext.Provider
          value={{
            active: this.state.active,
            toggleSide: this.state.toggleSide,
            toggleActive: this.toggleActiveNav,
            toggleSideNav: this.toggleSideNav,
          }}
        >
          <Suspense fallback={<Loading />}>
            <ThemeProvider theme={lightTheme}>
              <GlobalStyles />
              <Navbar />
              <Route component={Landing} />
              <Footer />
            </ThemeProvider>
          </Suspense>
        </IndexContext.Provider>
      </Router>
    )
  }
}
