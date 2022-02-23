import React from 'react';
import "./toggleswitch.css";
import {useSelector,useDispatch} from "react-redux";
import {darkTheme,lightTheme} from "../index";
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
    const dispatch = useDispatch()
    return (
        <label class="switch">
           {(theme === "dark") ? ( <input type="checkbox" checked onChange={ () => {
                (theme === "dark") ? dispatch(lightTheme()) : dispatch(darkTheme());
                window.location.reload();
            }}/>) : (<input type="checkbox" onChange={ () => {
                (theme === "dark") ? dispatch(lightTheme()) : dispatch(darkTheme());
                window.location.reload();
            }}/>)}
            <span class="slider round"></span>
        </label>
    )
}
function ToggleSwitch() {
    return <MainContainer >
        {"Dark Mode " }<Marginer direction="horizontal" margin={10} /><Sw />
    </MainContainer>
    
}

export default ToggleSwitch
