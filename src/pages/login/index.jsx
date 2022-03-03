import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {Marginer} from '../../components/index'
import AdminLogo from '../../assets/admin.svg';
import {FaUserAlt} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri'

const LoginMainContainer = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        width: 100%;
    }
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
    @media (max-width: 1200px) {
        width: 100%;
    }
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
    width: 40%;
    height: 30rem;
    &>img {
        width: 100px;
    }
    &>h3{
        font-weight: 600;
    }

    @media (max-width: 1200px) {
        width: 90%;
        
    }
    @media (max-width: 991px) {
        width: 96%;
        &> nav,button {
            width: 80%;
            align-items: center;
            
        }
        &>img{
            width: 10rem;
        }
        
        
    }

`
const StyledButton = styled.button`
    border-radius: 8px;
    background-color: var(--button-blue);
    width: 8rem;
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
const InputContainer = styled.nav`
    display: inline-flex;
    overflow: hidden;
    height: 2rem;
    border-radius: 8px;
    padding-left: 3px;
    border: 1px solid var(--dark-bg);
    &>svg{
        height: 100%;
    }
    &>input{
        width: 100%;
    }
    .darkmode>&{
        background-color: var(--dark-bg);   
    }
    
    
`
const StyledInput = styled.input`
    text-align: center;
    height: 100%;
    align-self: center;
    outline: none;
    border: hidden;
    &:focus{
            border-bottom: 2px solid var(--link);
    }
    &::-webkit-input-placeholder {
        text-align: center;
    }
    .darkmode &{
        background-color: var(--dark-container);
        color: var(--dark-text);
    }
    
`
const isEmpty = (user,pass) => {
  return (user.length === 0 || pass.length === 0)
}
function Login() {
    const [warning,setWarning] = useState(" ");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [Loading,setLoading] = useState(false);
    const [response,setResponse] = useState({});
    
    useEffect(() =>{
        setUsername(username);
        },[username]);
    useEffect(() => {
        setPassword(password);
        }
    ,[password])

    if (Loading) {
        return <nav className="loader" />
    }
    if(!Loading){
    return (
        <LoginMainContainer>
            <Marginer direction="vertical" margin="1rem" />
            <LoginInsideContainer >
                <LoginFormContainer className="round-container">
                <h3>Login</h3>
                <h4>{warning}</h4>
                <img src={AdminLogo} alt="Admin Logo" />
                <Marginer direction="vertical" margin="10px"  />
                <InputContainer>
                    <FaUserAlt />
                    <StyledInput type="text" id="username" placeholder="Username"  autoFocus required onChange={(user)=> {
                        setUsername(user.target.value);
                    }}
                    />
                </InputContainer>
                <Marginer direction="vertical" margin="5px" />
                <InputContainer>
                    <RiLockPasswordFill />
                    <StyledInput type="password" placeholder="Password"  required  onChange={(password)=> {
                        setPassword(password.target.value);
                    }}/>
                </InputContainer>
                    <Marginer direction="vertical" margin="1rem" required /> 
                    <StyledButton onClick={() =>{
                        {isEmpty(username,password) ? setWarning("All the fields are required.") : setWarning("")}
                        
                    }}>Log in</StyledButton>
                </LoginFormContainer>
                <Marginer direction="vertical" margin="1rem" />
            </LoginInsideContainer>
        </LoginMainContainer>
    )
    }
}

export default Login
