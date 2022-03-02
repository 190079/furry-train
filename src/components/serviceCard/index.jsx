import React from 'react'
import styled from 'styled-components'

const ServiceCardMainContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 30rem;
    background-color: var(--light-container);
    border-radius: 15px;
    border: 1px solid var(--light-bg);
    z-index: 2;
    margin: 0 1rem 0 1rem;
    overflow: hidden;

    .darkmode &{
        background-color: var(--dark-container) !important;
        border: 1px solid var(--dark-bg);

    }
    @media (max-width: 1200px) {
        margin-bottom: 1rem;
    }
    @media (max-width: 787px) {
        margin-bottom: 1rem;
        width: 100%;
    }

`
const ButtonContainer = styled.nav`
    display: flex;
    bottom: 0;
    position: sticky;
    justify-content: flex-end;
    margin-bottom: 1rem;
    &>button{
        background: var(--button-blue) !important;
        border: 1px solid var(--button-blue);
        border-radius: 4px;
        width: 25%;
        height: 2rem;
        align-self: flex-end;
        margin-right: 1rem;
        color: #fff;
    }
    &>button:hover{
        background: transparent ! important;
        color: var(--button-blue) !important;
    }
`
const ServiceCardPhotoContainer = styled.nav`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    &>a>img {
        width: 100%;
        height: 25rem;
    }
    &>a>img:hover {
        transition: all 0.3s;
        transform: scale(1.1, 1.1);
    }
    
`
const ServiceCardInfoContainer = styled.nav`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-item: center;
    flex-wrap: wrap;
    position: sticky;
    width: 90%;
    height: 8rem;
    justify-content: center;
    &>h3 {
        color: var(--light-text) !important;
        font-weight: bold;
    }
    &>p {
        color: var(--light-text) !important;
    }
    .darkmode &>*{
        color: var(--dark-text) !important;

    }
`
function ServiceCard({Title,desc,imageURL,link}) {
  return (
    <ServiceCardMainContainer>
        <ServiceCardPhotoContainer>
            <a href={link}>
                <img src={imageURL} alt={Title} />
            </a>
        </ServiceCardPhotoContainer>
        <ServiceCardInfoContainer>
            <h3>{Title}</h3>
            <p>{desc}</p>
        </ServiceCardInfoContainer>
        <ButtonContainer>
            <button onClick={() => window.location.href = link }>Visit GitHub</button>
        </ButtonContainer>
    </ServiceCardMainContainer>
  )
}

export default ServiceCard