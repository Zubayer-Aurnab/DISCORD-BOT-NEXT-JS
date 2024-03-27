import React from 'react';
import DiscordBtn from '../DiscordBtn/DiscordBtn';
import Dropdown from '../Dropdown/Dropdown';

const Main = () => {
    return (
        <div className='w-4/5 mx-auto flex justify-between my-10 border'>
            <div><Dropdown /></div>
            <div className='text-6xl'> logo</div>
            <div><DiscordBtn /></div>
        </div>
    );
};

export default Main;