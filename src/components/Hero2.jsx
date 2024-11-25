import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './Header';

const Hero2 = () => {
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
                    <Title>Our Story</Title>
                    <Description>
                        We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
                    </Description>
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

export default Hero2;

// Styled components
const HeroSection = styled(motion.section)`
   display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 20px 40px;
    min-height: 90vh;
    text-align: center;
    position: relative;
    overflow: hidden;
    background-image: url('./pictures/Rectangle 38.png'); 
    background-size: 70% 100%; 
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
    padding-top: 100px; /* Offset for the header height */
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
    gap: 20px;
    justify-content: center;
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
