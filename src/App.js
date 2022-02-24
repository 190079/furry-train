import React from 'react';
import {NavBar,Footer,LightTheme,DarkTheme} from './components/index';
import "./App.css"
import {useSelector,useDispatch} from "react-redux";
function App() {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()
  {theme === "dark" ? dispatch(DarkTheme()) : dispatch(LightTheme()) }
  return (
    <nav className="MainContainer">
      <NavBar />
      <h1>App</h1>
      <Footer />
    </nav>
  )
}

export default App