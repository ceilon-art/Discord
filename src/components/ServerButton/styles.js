import styled from 'styled-components';

export const Button = styled.button `
    display:flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    height: 48px;
    width: 48px;
    margin: 15px 5px 5px 5px;
    border-radius: 50%;

    background-color: ${(props) => 
        props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    cursor: pointer;
    position: relative;

    transition: border-radius .2s, background-color .2s;

    > img {
        width: 35px;
        height: 35px;
    }

    &::before {
        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;

        content: '';
        display: ${(props) => 
            props.hasNotifications ? 'inline' : 'none'}
    }

    &::after {
        background-color: var(--notification);
        width: auto;
        height: 16px;
        
        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;
        
        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: center;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        content: '${(props) => 
            props.mentions && props.mentions}';
        display: ${(props) =>
            props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    }

    &:active,
    &:hover {
        border-radius: 16px;
        background-color: ${(props) => 
            props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
        display: ${(props) => props.user && 'none'};
    }
`;