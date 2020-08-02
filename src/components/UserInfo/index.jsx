import React from 'react';

import { Container, Profile, ProfilePicture, ProfileName, Icons, MicroIcon, Headset, Settings } from './styles';

function UserInfo() {
    return (
        <Container>
            <Profile>
                <ProfilePicture />
                <ProfileName>
                    <strong>Ceilon</strong>
                    <p>#8166</p>
                </ProfileName>
            </Profile>

            <Icons>
                <MicroIcon />
                <Headset />
                <Settings />
            </Icons>
        </Container>
    ) 
};

export default UserInfo;