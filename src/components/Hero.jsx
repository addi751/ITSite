import React from 'react';
import styled from 'styled-components';
import { motion} from 'framer-motion';
import Header from './Header';



const Hero = () => {
  

    return (
        <>
        <HeroSection
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <VideoBackground autoPlay loop muted>
                <source src="./pictures/vecteezy_digital-blue-background-with-dots-and-lines-big-data_26234742.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </VideoBackground>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <HeroContent>
                <Title>Empowering Your Business with IT Innovation</Title>
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

export default Hero;

// Styled components
const HeroSection = styled(motion.section)`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 20px;
    min-height: 90vh;
    text-align: center; 
    position: relative; /* Required for absolute positioning of the video */
    overflow: hidden; /* Ensures no overflow from the video */
    background-color: black; /* Set the background color to black */
    z-index: 1;

`;

const VideoBackground = styled.video`
    position: absolute;
    background-color: black; 
    top: 50%;
    left: 80%;
    min-width: 50%;
    min-height: 50%;
    width: auto;
    height: auto;
    z-index: ; /* Ensure the video is behind other content */
    transform: translate(-20%, -60%);
    object-fit: cover; /* Cover the entire section */
`;

const HeaderWrapper = styled.div`
    width: 95%;
    position: absolute;
    top: 0;
`;

const HeroContent = styled.div`
    max-width: 800px;
        z-index: 1;

    padding-top: 100px; /* Offset for the header height */
`;

const Title = styled.h1`
    font-size: 2.5rem;
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

