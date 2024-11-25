import React, { useState } from 'react';
import styled from 'styled-components';




const Stats2 = () => {
    const [isHovered, setIsHovered] = useState(false); // Add this line

    // Styled components
// image section
const styles = {
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    highlightHeading: {
        backgroundColor: '#f0f0f0',
        padding: '50px 0px',
        paddingLeft:'40px',
        width: '85%',
        height: '15vh',
        textAlign: 'left',
        fontSize: '22px',
        fontWeight:'bold',
        color: '#333',
        marginTop: '50px',
    },
    description: {
        padding: '20px 0px',
        maxWidth: '1250px',
        margin: '10px 0px',
        textAlign: 'left',
        fontSize: '16px',
        color: '#555',
    },
    button: {
        backgroundColor: '#000',
        color: '#FFF',
        padding: '10px 20px',
        fontSize: '14px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s', // Smooth transition for hover effect
        display: 'flex',
        marginLeft: '1000px'
    }
    
};
const StatisticsSection = styled.section`
    background-color: #000;
    color: #FFF;
    padding: 90px 60px;
    margin-bottom: 260px;
    text-align: center;
`;
const StatsContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
`;
const Stat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 200px;
`;

const Icon = styled.div`
    font-size: 4rem;
    margin-bottom: 10px;
`;

const StatTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
`;
         
   
    return (
        <>
    <StatisticsSection>
        {/* that alot Section Below */}
        <div style={styles.sectionContainer}>
         <div style={styles.highlightHeading}>THAT LOT
            <div style={styles.description}>
                Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay your external workforce in one click, with 100% compliance.
                <button
                    style={{
                        ...styles.button,
                        backgroundColor: isHovered ? '#555' : '#000', // Change color on hover
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    BOOK A DEMO
                </button>
            </div>
         </div>
         </div>
       <StatsContainer>
                    <Stat>
                        <Icon>📊</Icon>
                        <StatTitle>12 Services</StatTitle>
                    </Stat>
                    <Stat>
                        <Icon>📁</Icon>
                        <StatTitle>200+ Projects</StatTitle>
                    </Stat>
                    <Stat>
                        <Icon>💵</Icon>
                        <StatTitle>$200k+ Revenue</StatTitle>
                    </Stat>
                    <Stat>
                        <Icon>😊</Icon>
                        <StatTitle>300+ Happy Clients</StatTitle>
                    </Stat>
                </StatsContainer>
    </StatisticsSection>
    </>
    );
};

export default Stats2;

