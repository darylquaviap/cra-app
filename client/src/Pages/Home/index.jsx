import React from 'react';
import GetCountries from '../../Components/apollo/getCountries';
import { Fab } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const pageFormat = {
    width: '100%',
    height: '100%',
    position: 'absolute',
};

const Home = () => {

    return (
        <div
            className="Home"
            style={pageFormat}
        >
            <div
                className="titleSec"
            >
                <h3
                    style={{
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}
                >
                    List of Countries all over the world
                </h3>
                <Fab
                    className="returnHome"
                    variant="extended"
                    color="secondary"
                    size="small"
                    style={{
                        right: '100px',
                        position: 'fixed',
                        top: '20px',
                    }}
                    onClick={() => {
                        return (window.location = '/')
                    }}
                >
                    <ExitToAppIcon sx={{ mr: 1 }} />
                    Exit Country Table
                </Fab>
            </div>
            <div
                className="Table"
                style={{
                    display: 'inline-block',
                    marginLeft: '5vw',
                    width: '90vw',
                    height: '80vh'
                }}
            >
                <GetCountries
                    data-testid='getCountries'
                />
            </div>
            <h6
                className="recognition"
            >
                Special Thanks to Trevor Baldes Free Countries GraphQL API
            </h6>
        </div>
    );
};

export default Home;