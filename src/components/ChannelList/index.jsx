import React from 'react';

import { Container, ChannelType, PlusIcon, ServerContainer } from './styles';

import ServerType from '../ServerType/index';

function ChannelList() {
    return (
        <Container>
            <ChannelType>
                <span>Canais de texto</span>
                <PlusIcon />
            </ChannelType>

            <ServerContainer>
                <ServerType name='chat-livre' />
                <ServerType name='trabalho' />
                <ServerType name='lolzinho' />
                <ServerType name='valorant' />                
                <ServerType name='grand-chase' /> 
            </ServerContainer>                      
        </Container>
    )
};

export default ChannelList;