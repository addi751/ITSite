import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header 
            initial={{ y: -50 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            <HeaderContainer>
                <Logo>YOUR LOGO</Logo>
                <Nav>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/Service">Service</NavLink>
                    <NavLink href="#">Resources</NavLink>
                    <NavLink href="#">Pricing</NavLink>
                    </Nav>
            
                <ActionButtons>
                <NavLink href="#">Login</NavLink>
                <NavLink href="#">Contact Us</NavLink>
                </ActionButtons>
              
            </HeaderContainer>
        </motion.header>
    );
};

export default Header;

// Styled-components for Header
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 30px;
    background-color: transparent;
    color: white;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const Nav = styled.nav`
    display: flex;
    gap: 55px;
`;

const NavLink = styled.a`
    text-decoration: none;
    color: white;
    font-weight: 500;
    &:hover {
        color: #007BFF;
    }
`;

const ActionButtons = styled.div`
    display: flex;
    gap: 50px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: #0056b3;
    }
`;
