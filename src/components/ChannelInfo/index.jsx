import React from 'react';

import { Container, Chat, Separator, ChatInfo } from './styles';
import HashTag from '../../assets/images/hashtag.png'

function ChannelInfo() {
    return (
        <Container>
            <Chat>
                <img src={HashTag} />
                <p>chat-livre</p>
            </Chat>
            <Separator />
            <ChatInfo>
                <p>Canal aberto para conversas</p>
            </ChatInfo>
        </Container>
    )
};

export default ChannelInfo;