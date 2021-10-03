import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import MyGallery from './MyGallery/MyGallery';
import './Navbar.css';

class Navbar extends React.Component{
    render() {
        return (
            <div className='Navbar'>
                <ul>
                    <AboutMe/>
                    <MyGallery/>
                    <Contacts/>                   
                </ul>
            </div>
        )
    }
}

export default Navbar;