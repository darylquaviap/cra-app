import React from 'react';
import stars from '../../Components/Images/stars.gif';

const footStyle = {
    // backgroundColor: 'black',
    backgroundColor: 'black',
    backgroundImage: (window.location.pathname === '/' ? `url(${stars})` : null),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
    fontSize: '20px',
    width: '100%',
    position: 'fixed',
    bottom: 0,
};

const Footer = () => {

    return (
        <>
            <footer
                className='footer'
                style={footStyle}
                data-testid='footer'
            >
                Quay Pyles - Full Stack Developer
            </footer>
        </>
    )
};

export default Footer;