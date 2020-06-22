import React, { lazy, Suspense } from "react"
import "./App.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"

// Utils
import { lightTheme, darkTheme } from "./Components/utils/Styled"
import { GlobalStyles } from "./Components/utils/GlobalStyles"
import Loading from "./Components/utils/Loading"

// Layouts
import Navbar from "./Components/layouts/Navbar"
import Footer from "./Components/layouts/Footer"

// Components
const Landing = lazy(() => import("./Components/pages/Landing"))

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Navbar />
            <Route component={Landing} />
            <Footer />
          </ThemeProvider>
        </Suspense>
      </Router>
    )
  }
}
