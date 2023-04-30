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
    width: 674px;
    width: 635px;
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

export const Components = styled.div `
    padding-top: 20px;
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
    margin-top: 20px;
`

export const Input = styled.input `
    &[type="date"]::-webkit-inner-spin-button,
    &[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
    margin-bottom: 15px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    text-align: center;
    justify-content: center;
    appearance: none;
    -webkit-appearance: none;
    
    

    box-sizing: border-box;
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    width: 182px;
    height: 48px;
`;

export const InputFooter = styled.div `
    display: flex;
    justify-content: flex-end;
`

export const ButtonSend = styled.button `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border: none;

    width: 147px;
    height: 48px;
    border-radius: 24px;
    background: #00995D;
    cursor: pointer;
`

export const ButtonCancel = styled.button ` 
    margin-right: 30px;
    border: none;
    background: none;

    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
`

export const ContainerFooter = styled.div `
    margin-top:30px ;
    border-top: 3px solid #E0E0E0;
`

export const Text = styled.p `
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.2px;
    color: #616161;
`

export const TextArea = styled.textarea `
    width: 590px;
    height: 153px;
    resize: none;
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    line-height: 3rem;
    padding-left: 1rem;
`

export const InputFile = styled.input `
    /* back
    border-radius: 8px; */
`
export const Card = styled.div `
    width: 578px;
    height: 122px;
    background: #C5F2E0;
    border-radius: 8px;
`

export const TitleAvaliation = styled.div `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    padding: 15px 0 0 15px;
    color: #00995D;
`

export const ContentCard = styled.p `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    color: #212121;
    padding: 0 0 0 15px;
`