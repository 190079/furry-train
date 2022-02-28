import React,{useEffect,useRef} from 'react';
import { gsap } from "gsap";
import {HomePage} from "./pages/index";
import {NavBar,Footer,LightTheme,DarkTheme,Marginer} from './components/index';
import "./App.css"
import {useSelector,useDispatch} from "react-redux";

function App() {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    theme === "dark" ? dispatch(DarkTheme()) : dispatch(LightTheme()) 

  },[theme])
 
  // {}
  return (
    <nav className="MainContainer">
      <NavBar />
      <HomePage />
      <Footer  />
    </nav>
  )
}

export default App