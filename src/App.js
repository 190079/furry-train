import React,{useEffect,useRef} from 'react';
import { gsap } from "gsap";
import {NavBar,Footer,LightTheme,DarkTheme,Marginer,ReactRoutes} from './components/index';
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
      <ReactRoutes />
      <Footer  />
    </nav>
  )
}

export default App