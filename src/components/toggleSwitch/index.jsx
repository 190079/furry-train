import React,{useLayoutEffect} from 'react';
import "./toggleswitch.css";

import styled from "styled-components/";

const MainContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-text: center;
    font-size: 1rem;
    font-weight: bold;
    
`
const Sw = ({event,state}) => {
    return (
        <label className="switch">
           <input type="checkbox" id="btn"  checked={state} onChange={event}/>
            <span className="slider round"></span>
        </label>
    )
}

function ToggleSwitch({event,Title,state}) {
    return <MainContainer >
        {Title }<Sw  event={event} state={state}/>
    </MainContainer>
    
}

export default ToggleSwitch
