import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const Servicessection = () => {
  
    // Styled components

   //services section
   const ServicesSection = styled.section`
   padding: 50px 20px;
   text-align: center;
`;

const SectionTitle = styled.h2`
   font-size: 2rem;
   color: #333;
   margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 20px;
`;

const ServiceCard = styled(motion.div)`
   background-color: transparent;
   padding: 20px;
   border-radius: 8px;
   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
   cursor: pointer;
`;

const ServiceTitle = styled.h3`
   font-size: 1.25rem;
   color: black;
   font-weight: bold;
   transition: color 0.3s ease; /* Smooth transition */
   
   &:hover {
       color: blue; /* Change text color to blue on hover */
   }
`;

// image section
const styles = {
   sectionContainer: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       padding: '20px',
       fontFamily: 'Arial, sans-serif',
   },
   imageContainer: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   },
   image: {
       maxWidth: '100%',
       height: 'auto',
       borderRadius: '8px',
   },
   textContent: {
       maxWidth: '1000px',
       marginTop: '10px',
       fontSize: '16px',
       fontWeight: 'bold',
       lineHeight: '1.5',
       textAlign: 'left',
       color: '#333',
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
}

    return (
        <>
          <ServicesSection>
                <SectionTitle>Our Services</SectionTitle>
                <ServicesGrid>
                    {["Managed IT Services", "Cloud Solutions", "Cybersecurity", "IT Consulting"].map((service, index) => (
                        <ServiceCard
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ServiceTitle>{service}</ServiceTitle>
                        </ServiceCard>
                    ))}
                </ServicesGrid>
                </ServicesSection>

                     {/* Image Section */}
            <div style={styles.sectionContainer}>
            <div style={styles.imageContainer}>
                <img 
                    src="./pictures/img1.png" 
                    alt="Company workforce management" 
                    style={styles.image}
                />
            </div>

            {/* Text Content */}
            <div style={styles.textContent}>
                Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay your external workforce in one click, with 100% compliance.
                Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay your external workforce in one click, with 100% compliance.

            </div>

            {/* Highlighted Section Below */}
            <div style={styles.highlightHeading}>THAT LOT
            <div style={styles.description}>
                Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay your external workforce in one click, with 100% compliance.
            </div>
            </div>
        </div>
        </>
    );
};

export default Servicessection;

