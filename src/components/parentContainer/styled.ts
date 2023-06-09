import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    padding: 1.5rem;
    background: #FFFF;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: .5rem;
    margin-bottom: 1rem;
    
`

export const Content = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled.button `
    border: none;
    background-color: white;
    cursor: pointer;
`
export const ContentSections = styled.div `
    display: flex;
    justify-content: space-between;
`

export const Div = styled.div `
    display: flex;
`

export const Text = styled.div `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #616161;
`

export const Select = styled.select `
    width: 295px;
    height: 38px;
    background: #FFFFFF ;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    margin-left: 10px;
`

export const Label = styled.label `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #212121;
`

export const Date = styled.p `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #212121;
`