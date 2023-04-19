import styled from 'styled-components'

export const ModalOutside = styled.div<{isOpen: boolean}> `
    display: ${({isOpen}) => isOpen ? "initial" : "none"};
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

export const ModalContent = styled.div `
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid gray;
    width: 75%;
`

export const ClosedButton = styled.button `
    color: gray;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    background: none;
    border: none;
`

export const Title = styled.h1 `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #00995D;
`

export const SecondTitle = styled.h2 `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding-left: 10px;
`

export const Div = styled.div `
    display: flex;
    align-items: center;
`

export const NumberIcon = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    color: white;
    background-color: #00995d;
`

export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`

export const SubContainer = styled.div `
    
`