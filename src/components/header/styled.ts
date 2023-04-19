import styled from "styled-components"

export const Text = styled.p`
    

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 29px;
    

    color: #00995D;

    b {
        font-weight: 700;
        color: #017849;
    }
`

export const Container = styled.div `
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 3.5rem;
    -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background: #FFFFFF;
    position: fixed;
    top: 0;
    z-index: 2;
`
export const ContentImg = styled.div `
    padding: 20px;

    height: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Div = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0 30px;
`

export const ButtonLogin = styled.div `
    margin-right: 0.5rem;
`