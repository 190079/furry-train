import React from 'react'
import styled from 'styled-components';
import {Marginer} from '../../components/index'
import AdminLogo from '../../assets/admin.svg'
const LoginMainContainer = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
        width: 100%;
    }
`
const LoginInsideContainer = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 75%;
    @media (max-width: 991px) {
        width: 100%;
    }
`
const LoginFormContainer = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 40%;
    height: 30rem;
    &>img {
        width: 100px;
    }

    @media (max-width: 991px) {
        width: 96%;
    }

`
const StyledButton = styled.button`
    border-radius: 8px;
    background-color: var(--button-blue);
    width: 6rem;
    height: 2rem;
    text-align: center;
    justify-content: center;
    border: 2px solid var(--button-blue);
    color: var(--link);
    font-weight: bold;

    &:hover {
        transition: all 0.3s;
        background-color: transparent;
        font-weight: bold;
    }

`

function Login() {
    return (
        <LoginMainContainer>
            <Marginer direction="vertical" margin="1rem" />
            <LoginInsideContainer >
                <LoginFormContainer className="round-container">
                <h3>Login</h3>
                <Marginer direction="vertical" margin="1rem" />
                <img src={AdminLogo} alt="Admin Logo" />
                <Marginer direction="vertical" margin="1rem" />
                <input className="round-container"/>
                <Marginer direction="vertical" margin="10px" />
                <input className="round-container" />
                <Marginer direction="vertical" margin="10px" />
                <StyledButton>Log in</StyledButton>
                </LoginFormContainer>
                <Marginer direction="vertical" margin="1rem" />
            </LoginInsideContainer>
        </LoginMainContainer>
    )
}

export default Login
