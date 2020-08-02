import React from 'react';

import ServerButton from '../ServerButton/index';
import { Container, Separator } from './styles';

function ServerList() {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={72} />
            <ServerButton />
        </Container>
    )
};

export default ServerList;