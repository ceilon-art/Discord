import styled from 'styled-components';

import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

export const Container = styled.div `
    grid-area: UI;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--quaternary);
`;

export const Profile = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProfilePicture = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    height: 48px;
    width: 48px;
    margin: 15px 5px 10px 5px;
    border-radius: 50%;

    background-color: var(--gray);

    cursor: pointer;
    position: relative;

    &::after {
        background-color: var(--notification);
        width: 7px;
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

        content: '';
        display: inline;
    }
`;

export const ProfileName = styled.div `
    > strong {
        color: var(--white);
    }

    >p {
        color: var(--gray)
    }
    margin: 10px 5px 3px 7px;
    font-size: 14px;
    cursor: pointer;
`;

export const Icons = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    cursor: pointer;
    margin: 3px 5px;
    color: var(--gray);
`;

export const MicroIcon = styled(MicIcon) `
    margin-right: 4px;
`;

export const Headset = styled(HeadsetIcon) `
    margin-right: 4px;
`;

export const Settings = styled(SettingsIcon) `
    margin-right: 4px;
`;

