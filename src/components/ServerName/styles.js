import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Container = styled.div `
    grid-area: SN;
    
    display:flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 11px 0 16px;
    background-color: var(--secondary);

    box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const ServerData = styled.span `
    color: var(--white);

    font-weight: 500;
    font-size: 1.1em;
`;

export const ServerIcon = styled(ExpandMoreIcon)`
    width: 28px;
    height:28px;

    color: var(--white);
    cursor: pointer;
`;