import { useState, useEffect } from "react";
import React from 'react';

import styled from "styled-components/macro";
import { NavLink as Link } from "react-router-dom";
import { MdSearch } from 'react-icons/md'


export const Container = styled.div`

    display: flex;
    align-items: center;
    font-family: 'Libre Franklin', sans-serif;
    background-color: black;
    color: white;
    width: 100vw;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    padding: 0 4vh;
    font-size: 25px;
`;

export const NavBar = styled.div`

    font-size: 20px;
    background-color: black;
    padding: 0 3vh;
`;

export const NavLink = styled(Link)`

    padding: 0 3vh;
    font-size: 19px;
    text-decoration: none;
    color: white;
    transition: font-size 0.5s;

    &:hover {
        color:#00FF7F;
        font-size: 21px;
    }
`;


export const SideMenu = styled.button`
    cursor: pointer;
    

`;



export const Header = ({children,  ...props }) => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Container>
            <Title>My blog</Title>
            <NavBar>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </NavBar>
        </Container>
    );
}
