import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <StyledNavigation>
            <div className="title"><span>Jainam</span>challenges</div>
            <StyledNavList>
                <StyledNavListItem>
                    <StyledNavLink to={'/colors'}>Colors</StyledNavLink>
                </StyledNavListItem>
                <StyledNavListItem>
                    <StyledNavLink to={'/typography'}>Typography</StyledNavLink>
                </StyledNavListItem>
                <StyledNavListItem>
                    <StyledNavLink to={'/spaces'}>Spaces</StyledNavLink>
                </StyledNavListItem>
                <StyledNavListItem>
                    <StyledNavLink to={'/buttons'}>Buttons</StyledNavLink>
                </StyledNavListItem>
                <StyledNavListItem>
                    <StyledNavLink to={'/inputs'}>Inputs</StyledNavLink>
                </StyledNavListItem>
                <StyledNavListItem>
                    <StyledNavLink to={'/grid'}>Grid</StyledNavLink>
                </StyledNavListItem>
            </StyledNavList>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    width: 18%;
    background-color: #FAFBFD;
    min-height: 100vh;
    padding: 30px 20px;

    .title{
        text-align: center;
        color: #090F31;
        font-weight: 600;
        
        span{
            color: #F75F3B;
        }
    }
`;

const StyledNavList = styled.ul`
    margin-top: 5em;
    height: 20em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    padding-left: 2em;
`;

const StyledNavListItem = styled.li`
    list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #9E9E9E;

    &.active{
        color: #090F31;
        font-weight: 700;
    }
`;

export default Navigation;