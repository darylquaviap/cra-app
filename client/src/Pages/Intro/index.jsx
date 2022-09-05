import React, { useState } from 'react';
import backgroundWorld from '../../Components/Images/globe.gif';
import stars from '../../Components/Images/stars.gif';

const Intro = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    return (
        <div
            className="Intro"
            style={{
                backgroundColor: 'black',
                backgroundImage: `url(${stars})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
            }}
        >
            <h1
                style={{
                    color: 'white',
                    fontSize: '40px',
                    fontWeight: 'bolder',
                    display: 'inline-block',
                    backgroundColor: 'none',
                    marginLeft: '35vw',
                    marginBottom: '30px',
                    marginTop: '30px',
                    alignItems: 'center',

                }}
            >
                We Run The World
            </h1>
            <img
                className="animationBckgrd"
                src={backgroundWorld}
                alt={'worldAni'}
                style={{
                    // backgroundImage: `url(${backgroundWorld})`,
                    // backgroundRepeat: "no-repeat",
                    // // backgroundSize: "cover",
                    width: '35vw',
                    height: '80vh',
                    // left: '50vw',
                    top: '45vh',
                    display: 'block',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // marginTop: '10vh',
                    marginLeft: '30vw',
                }}
            />
            <button
                className="glowBtn"
                style={{
                    padding: '10px 10px',
                    display: 'inline - block',
                    color: (isHovering ? 'white' : '#2c0ddb'),
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontSize: '1.2em',
                    borderRadius: '10px',
                    border: 'none',
                    overflow: 'hidden',
                    marginLeft: '75vw',
                    position: 'absolute',
                    top: '40vh',
                    background: (isHovering ? '#0e0088ee' : null),
                    boxShadow: (isHovering ? '0 0 50px #1424ff' : null),
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                    return (window.location='/countries')
                }}>
                Let's Explore
            </button>
            <h3
                className='joke'
                style={{
                    color: 'white',
                    display: 'block',
                    right: '10px',
                    marginTop: 0,
                    marginBottom: 0,
                    top: '50vh',
                    position: 'absolute'
                }}
            >
                Q: What is the name of a bee that lives in America?
                <br />
                A: USB
            </h3>
        </div >
    )
}

export default Intro;