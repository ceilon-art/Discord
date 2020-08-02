import styled from 'styled-components';

export const Container = styled.div `
    grid-area: SL;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--tertiary);

    overflow: none;
`;

export const Separator = styled.div `
    height: 2px;
    width: 50px;
    margin: 5px 0 5px 0;

    background-color: var(--quinary);
`;