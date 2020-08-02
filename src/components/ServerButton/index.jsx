import React from 'react';

import { Button } from './styles';

import Discord from '../../assets/images/Discord.png';


function ServerButton({
    selected,
    isHome,
    hasNotifications,
    mentions
}) {
    return (
        <Button 
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            { isHome && <img src={Discord} alt="Discord" /> }
        </Button>
    )
}

export default ServerButton;