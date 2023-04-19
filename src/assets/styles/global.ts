import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,::before,::after{
        box-sizing: border-box;
    }
    html{
        font-size: 16px;
    }
    body{
        background: #E5E5E5;
    }
    body, input, button, select, textarea{
        font-size: 1rem;
        font-family: 'Montserrat';
    }
`

export const Card = styled.div`
    position: relative;
    padding: 1.5rem;
    background: #FFFF;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: .5rem;
    margin-bottom: 1rem;
`

export const Title = styled.h1`
    font-size: 1.2rem;
    line-height: 1.3rem;
    color: black;
    margin-bottom: 1rem;
    font-weight: 500;
`

export const Text = styled.p`
    font-size: 1rem;
    color: #424242;
    
`
export const PencilButton = styled.button `
    width: 32px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #017849;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    background: #FFFFFF;
    cursor: pointer;
`

export const Header = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`