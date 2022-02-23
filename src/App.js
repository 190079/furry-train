import React from 'react'
import { Marginer, NavBar } from './components'
import {useSelector,useDispatch} from "react-redux";
import {darkTheme, lightTheme} from "./components/index";
import {Footer} from "./components/index"
import "./App.css"

function App() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme);
  {(theme === "dark") ? dispatch(darkTheme()) : dispatch(lightTheme()) }
  return (
    <nav >
      <NavBar  />
      <Marginer  direction="vertical" margin="5rem"/>
      <h1>hello</h1>
      <Marginer direction="vertical" margin="10px" />
      <Footer />
    </nav>
  )
}

export default App
