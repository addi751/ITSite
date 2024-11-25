import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const Servicessection2 = () => {
  
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

                 
        </>
    );
};

export default Servicessection2;

