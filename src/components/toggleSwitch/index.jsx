import React,{useEffect} from 'react';
import "./toggleswitch.css";
import {useSelector,useDispatch} from "react-redux";
import {DarkTheme,LightTheme} from "../index";
import styled from "styled-components/";
import Marginer from '../Marginer';

const MainContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-text: center;
    
`
const Sw = () => {
    const theme = useSelector(state => state.theme)

    useEffect(()=>{
        document.getElementById("btn").checked = (theme === "dark")
    },[theme])

    const dispatch = useDispatch()
    console.log(theme)
    return (
        <label className="switch">
           <input type="checkbox" id="btn" onChange={ () => {
                (theme === "dark") ? dispatch(LightTheme()) : dispatch(DarkTheme());
                window.location.reload();
            }}/>)
            <span className="slider round"></span>
        </label>
    )
}
function ToggleSwitch() {
    return <MainContainer >
        {"Dark Mode " }<Marginer direction="horizontal" margin={10} /><Sw />
    </MainContainer>
    
}

export default ToggleSwitch
