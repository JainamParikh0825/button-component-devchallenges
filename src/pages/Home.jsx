import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <>
            <Navigation />
            <div style={{ width: "82%", position: "relative", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <Outlet />
                <StyledFooter>
                    created by <a className='username' href="https://devchallenges.io/portfolio/JainamParikh0825">Jainam Parikh</a> - devChallenges.io
                </StyledFooter>
            </div>
        </>
    );
};

const StyledFooter = styled.footer`
    width: 80%;
    margin: 2.5em auto;
    color: #A9A9A9;

    a{
        color: #A9A9A9;
    }

    .username{
        font-weight: 700;
    }

`;

export default Home;