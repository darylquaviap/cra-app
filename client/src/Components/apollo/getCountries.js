// import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../../Components/graphql/queries';
import CntryTable from '../table/table';
import loadingIcon from '../Images/loadingIcon.gif';

const GetCountries = () => {            // UseQuery inside Apollo to get Countries Data
    const { loading, error, data } = useQuery(GET_COUNTRIES);

    if (loading) {      //Display loading screen
        return (
            <img
                data-testId='loadingIcon'
                className="loading"
                src={loadingIcon}
                alt='loadingIcon'
                style={{
                    width: '35vw',
                    height: '80vh',
                    top: '45vh',
                    display: 'block',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '30vw',
                }}
            />
        )
    };

    if (error) return `Error! ${error.message}`;    //return error message

    return (
        <CntryTable     //display mui table with data being response data from apollo
            data={data}
        />
    );
};

export default GetCountries;