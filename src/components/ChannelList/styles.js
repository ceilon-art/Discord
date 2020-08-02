import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

export const Container = styled.div `
    grid-area: CL;
    
    display: flex;
    flex-direction: column;

    background-color: var(--secondary);
`;

export const ChannelType = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-between;

    margin: 10px 3px 5px 13px;
    color: var(--senary);

    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;

        cursor: pointer;

        transition: color .2s;

        &:hover {
            color: var(--hover);
        }
    };    
`;

export const PlusIcon = styled(AddIcon) `
    height:9px;
    width: 9px;
    margin-right: 3px;

    cursor: pointer;

    transition: color .3s;

    &:hover {
        color: var(--hover);
    };
`;

export const ServerContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 5px 3px 0px 0px;

    cursor:pointer;
`;
