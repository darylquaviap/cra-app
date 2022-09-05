import React from 'react';

const navStyle = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: '30px',
    maxHeight: '60px',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 99,
    right: 0,
};

const NavBar = () => {

    return (
        <>
            <nav
                className='navbar'
                style={navStyle}
            >
                Welcome to Country Explorer
            </nav>
        </>
    )
};

export default NavBar;