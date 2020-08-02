import styled from 'styled-components';

export const Container = styled.div `
    grid-area: CD;
    
    display: flex;
    flex-direction: column;

    background-color: var(--quinary);
`;

export const SubContainer =  styled.div `
    display: flex;
    align-items: center;

    margin-left: 20px;
`;

export const Datas =  styled.div `
    display: flex;
    flex-direction: column;

    margin-top: 7px;
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

export const ServerProfileBot = styled.button `
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

export const ProfileData =  styled.div `
    display: flex;
    justify-content: space-evenly;

    > p {
        color: var(--white);
    }

    > span {
        color: var(--hover)
    }
`;

export const Message =  styled.div `
    margin-left: 15px;

    > p {
        color: var(--white);
    }
`;

export const ProfileDataBot = styled.div `
    display: flex;

    margin-left: 17px;

    > p {
        color: var(--white);
    }

    > span {
        color: var(--white);
        font-weight: bold;
        margin-left: 15px;

        background: var(--link);
        border-radius: 8px;
        padding: 0px 3px;
    }
`;  

export const ChatInput = styled.div ` 
    width: 90%;
    height: 35px;
    border-radius: 4px;

    background: var(--chat-input); 
    margin: 40px 20px 15px 20px;

    > input {
        display: flex;
        align-items: center;

        color: var(--white);
        background: none;
        padding: 12px;
        font-size: 16px;
    }
`;
