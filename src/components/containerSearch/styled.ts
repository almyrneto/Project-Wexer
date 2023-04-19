import styled from "styled-components";

type TextActive = {
    active?: boolean
}

export const Text = styled.button<TextActive> `
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 19px;
    padding: .5rem 1rem;
    max-width: 300px;
    height: 48px;
    width: 100%;

    color: ${ ({active}) => active ? "#017849" : "#E0E0E0"};
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${ ({active}) => active ? "#017849" : "#E0E0E0"};
    border-right: 1px solid #E0E0E0;
`

export const Content = styled.p `
    display: flex;
`

export const Left = styled.div `
    width: 70%;
    flex: 0 0 70%;
`
export const Right = styled.div `
    position: relative;
    width: 30%;
    flex: 0 0 30%;
`

export const InputSearch = styled.input `
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    height: 48px;
    padding: 0 0.5rem;
    padding-right: 40px;
`
export const ButtonSearch = styled.button `
    position: absolute;
    right: 0;
    border: 0;
    background: transparent;
    width: 30px;
    height: 48px;
    top: 0;
    cursor: pointer;
`