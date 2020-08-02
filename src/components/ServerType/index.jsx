import React from 'react';

import Hashtag from '../../assets/images/hashtag.png'
import { Container, Title, HashtagIcon } from './styles';

function ServerType({
    name
}) {
    return (
        <Container>
            <HashtagIcon>
                <img src={Hashtag} />
            </HashtagIcon>

            <Title name={name}>
                { name && <p>{name}</p> }
            </Title>
        </Container>
    )
};

export default ServerType;