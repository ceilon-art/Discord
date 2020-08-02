import React from 'react';

import { Container, Online, Name, Offline, ServerButtonBot, ServerProfile} from './styles';

function UserList() {
    return (
        <Container>
            <Online>
                <p>Disponível - 1</p>
                <Name>
                    <ServerButtonBot />
                    <p>Groovy</p>
                    <span>BOT</span>
                </Name>
            </Online>

            <Offline>
                <p>Offiline - 7</p>                
                <Name>
                    <ServerProfile />
                    <p>Fulano</p>
                </Name>
                <Name>
                    <ServerProfile />
                    <p>Fulano</p>
                </Name>
                <Name>
                    <ServerProfile />
                    <p>Fulano</p>
                </Name>
                <Name>
                    <ServerProfile />
                    <p>Fulano</p>
                </Name>
                <Name>
                    <ServerProfile />
                    <p>Fulano</p>
                </Name>
                <Name>
                    <ServerProfile />
                    <p>Fulano</p>
                </Name>
            </Offline>
        </Container>
    )
};

export default UserList;