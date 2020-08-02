import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;

    height: 40px;
    width: 220px;

    margin: 0px 3px 5px 9px;

    cursor:pointer;

    position: relative;
    
    transition: background-color .3s;

    &:active,
    &:hover {
        background-color: rgba(0,1,1,0.1);
        border-radius: 8px;
    };
`;

export const Title = styled.div `
    color: var(--senary);

    margin-left: 12px;

    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
`;

export const HashtagIcon = styled.div `
    > img {
        width: 15px;
        height: 15px;

        margin-top: 5px;
    }
`;
