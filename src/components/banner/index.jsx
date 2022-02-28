import React,{memo} from 'react'
import styled from 'styled-components'
import './banner.css';

const BannerMainContainer = styled.nav`
    display: flex;
    flex-direction: column;
    background: ${({ image }) => `url(${ image })`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    width: 100%;
    height: 700px;
    
`
const BannerWrapper = styled.nav`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #1f1f1f ;
    opacity: 0.9;
    justify-content: center;

    
`
const WrapperInsideContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 75%;
    align-self: center;
    @media (max-width: 1200px){
        min-width: 98%;
    }
`
const WrapperBottomContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 33%;
    &>h1{
        color: #faa370;
        font-family: 'Helvetica';
        font-weight: bold;
    }
    &>p{
        color: #fff;
    }
    @media (max-width: 1200px) {
        align-self: center;
        margin-top: 10px;
        min-width: 100%;
        &> h1,p{
            align-self: center;
            font-size: 18px;
            justify-content: center;
        }
        
    }
`
const Button = styled.button`
    background-color: #0d6efd;
    color: #fff;
    font-weight: bold;
    border-radius: 14px;
    height: 3rem;
    width: 8rem;
    padding: 0 15px 0 15px;
    border: 2px solid #0d6efd;
    &:hover {
        border-radius: 15px;
        background: transparent;
    }
    @media (max-width: 1200px) {
        align-self: center;
        width: 98%;
    }
`
function Banner({item}) {
    return (
        <BannerMainContainer image={item.image}>
            <BannerWrapper className="wrapper">
                <WrapperInsideContainer>
                    <WrapperBottomContainer><h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <Button>{item.btnTitle}</Button>
                    </WrapperBottomContainer>
                </WrapperInsideContainer>
            </BannerWrapper>
        </BannerMainContainer>
    )
}

export default memo(Banner)
