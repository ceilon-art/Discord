import styled from 'styled-components';

export const Container = styled.div `
    grid-area: CI;

    display: flex;
    justify-content: left;
    align-items: center;

    background: var(--quinary);

    box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Chat = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin: 5px 10px 5px 10px;
    
    > img {
        margin-right: 10px;
    }
    
    > p {
        color: var(--white);
        margin-right: 5px;
    }
`;

export const Separator = styled.div `
    height: 35px;
    width: 1px;
    margin: 10px 0 10px 0;

    background-color: var(--senary);
`;

export const ChatInfo = styled.div `
    > p {
        margin-left: 15px;
        color: var(--hover);
    }
`;
