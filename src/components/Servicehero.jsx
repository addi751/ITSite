import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './Header';

const ServicesHero = () => {
    return (
        <>
            <HeroSection
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
                <HeroContent>
                    <Title>Our Services</Title>
                    <Description>
                    Delivering cutting-edge digital solutions tailored to your business needs</Description>
                    <ButtonGroup>
                        <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            Book a Demo
                        </Button>
                        <Button secondary whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            Request a Quote
                        </Button>
                    </ButtonGroup>
                </HeroContent>
            </HeroSection>
        </>
    );
};

export default ServicesHero;

// Styled components
const HeroSection = styled(motion.section)`
   display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 20px 40px;
    min-height: 90vh;
    text-align: left;
    position: relative;
    overflow: hidden;
    background-image: url('./pictures/Rectangle 37.png'); 
    background-size: 80% 100%; 
    background-position: right center; 
    background-repeat: no-repeat;
    background-color: black;
    z-index: 1;
`;

const HeaderWrapper = styled.div`
    width: 95%;
    position: absolute;
    top: 0;
`;

const HeroContent = styled.div`
    max-width: 700px;
    z-index: 1;
    padding: 0px 180px; /* Offset for the header height */
`;

const Title = styled.h1`
    font-size: 5rem;
    color: white;
    margin-bottom: 20px;
    line-height: 1.2;
    font-weight: 700;
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: white;
    margin-bottom: 40px;
    line-height: 1.6;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 30px;
    padding-left: 70px;
    justify-content: left;
`;

const Button = styled(motion.button)`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    background-color: ${({ secondary }) => (secondary ? 'transparent' : '#007BFF')};
    color: ${({ secondary }) => (secondary ? '#FFF' : '#FFF')};
    &:hover {
        background-color: ${({ secondary }) => (secondary ? '#555' : '#0056b3')};
    }
`;
