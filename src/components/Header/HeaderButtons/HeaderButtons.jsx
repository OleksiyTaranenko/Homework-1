import React from 'react';
import './HeaderButtons.css';

class HeaderButtons extends React.Component{
    render() {
        return (
            <div>                
                <p className='HeaderButtons'><button>CALL ME</button></p>
                <p className='HeaderButtons'><button>+38(097)123-45-67</button></p>
            </div>
        )
    }
}

export default HeaderButtons;