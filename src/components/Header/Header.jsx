import React from 'react';
import './Header.css';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import Logo from './Logo/Logo';

class Header extends React.Component{
    render() {
        return (
            <div className='Header'>
                <Logo/>
                <HeaderButtons/>
            </div>
        )
    }
}

export default Header;