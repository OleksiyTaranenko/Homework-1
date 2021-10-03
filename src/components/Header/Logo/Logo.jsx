import React from 'react';
import './Logo.css';

class Logo extends React.Component{
    render() {
        return (
            <div>
                <img className='logo' src="https://duckworthbooks.com/wp-content/uploads/2017/06/logo-tv-logo.png" alt="Logo" />                
            </div>
        )
    }
}

export default Logo;