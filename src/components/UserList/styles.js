import styled from 'styled-components';

export const Container = styled.div `
    grid-area: UL;

    display: flex;
    flex-direction: column;

    background: var(--secondary);

    cursor: pointer;
`;

export const Online = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    > p {
        color: var(--hover);
        font-size: 16px;
        margin-left: 30px;
    } 
`;

export const ServerButtonBot = styled.button `
    display:flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    height: 48px;
    width: 48px;
    margin: 15px 5px 5px 5px;
    border-radius: 50%;

    background-color: var(--mention-detail);

    cursor: pointer;
`;

export const ServerProfile = styled.button `
    display:flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    height: 48px;
    width: 48px;
    margin: 15px 5px 5px 5px;
    border-radius: 50%;

    background-color: var(--primary);

    cursor: pointer;
`;


export const Name = styled.div `
    display: flex;
    align-items: center;

    margin: 10px 15px 0px 15px;
    padding: 10px;

    > p {
        color: var(--hover);
        font-size: 16px;
        margin-left: 10px;
    }   

    > span {
        display: block;
        padding: 3px;
        margin-left: 15px;
        font-weight: bold;
        font-size: 12px;
        color: var(--white);

        background-color: var(--link);
        border-radius: 8px;
    }

    transition: background-color .2s;

    &:hover,
    &:active {
        background-color: rgba(0,0,0,0.1);
        border-radius: 16px;
    }
`;

export const Offline = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    > p {
        color: var(--hover);
        font-size: 16px;
        margin-left: 30px;
    }
`;
