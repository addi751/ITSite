import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const OurTeam = () => {
  const carouselRef = useRef(null);

  // Auto-play effect for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Scroll the carousel to the next item
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;
        const currentScrollPosition = carouselRef.current.scrollLeft;

        if (currentScrollPosition + clientWidth >= scrollWidth) {
          carouselRef.current.scrollLeft = 0; // Reset to the first item if end is reached
        } else {
          carouselRef.current.scrollLeft += 350; // Scroll by the width of one item
        }
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const styles = {
    section: {
      textAlign: 'center',
      margin: '20px 20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subheading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
      marginTop: '10px',
      marginBottom: '30px',
    },
    subheadingDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#4a4aef', // Adjust to the preferred color
    },
    paragraph: {
      maxWidth: '700px',
      margin: '0 auto',
      color: '#333',
      lineHeight: '1.6',
      fontSize: '16px',
    },
    teamContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    teamCard: {
      width: '200px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      overflow: 'hidden',
      textAlign: 'center',
      backgroundColor: '#FFF',
    },
    teamImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    teamName: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0 5px 0',
      color: '#333',
    },
    teamPosition: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '10px',
    },
    socialIconsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '15px',
    },
    socialIcon: {
      width: '24px',
      height: '24px',
      color: '#4a4aef', // Adjust to the preferred color
      cursor: 'pointer',
    },
  };

  const TeamContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 40px 0;
  `;

  const TeamHeading = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 20px 0;
    position: relative;
    display: inline-block;
    &:after {
      content: '';
      width: 60px;
      height: 3px;
      background: #6f42c1; /* Adjust to your theme color */
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -10px;
    }
  `;

  const CarouselContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 40px;
    padding: 20px 90px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const TeamCard = styled.div`
    min-width: 250px;
    background-color: black;
    color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    scroll-snap-align: center;
    text-align: center;
  `;

  const TeamImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
  `;

  const MemberInfo = styled.div`
    padding: 20px;
  `;

  const MemberName = styled.h3`
    font-size: 1.25rem;
    font-weight: bold;
  `;

  const MemberPosition = styled.p`
    font-size: 0.9rem;
    color: gray;
    margin: 5px 0;
  `;

  const SocialIconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  `;

  const Icon = styled.a`
    color: #6f42c1; /* Adjust to your theme color */
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #333;
    }
  `;

  return (
    <div>
      {/* Welcome Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Welcome</h2>
        <div style={styles.subheading}>
          <span style={styles.subheadingDot}></span>
          <span style={styles.subheadingDot}></span>
          <span style={styles.subheadingDot}></span>
        </div>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh proin neque.
          Sed neque cursus congue ultricies enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae.
        </p>
      </section>

      {/* Our Team Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Team</h2>
        <div style={styles.subheading}>
          <span style={styles.subheadingDot}></span>
          <span style={styles.subheadingDot}></span>
          <span style={styles.subheadingDot}></span>
        </div>
        <TeamContainer>
          <CarouselContainer ref={carouselRef}>
            {[...Array(6)].map((_, index) => (
              <TeamCard key={index}>
                <TeamImage src="./pictures/Rectangle 55.png" alt="Team Member" />
                <MemberInfo>
                  <MemberName>Member Name</MemberName>
                  <MemberPosition>Position in Company</MemberPosition>
                  <SocialIconContainer>
                    <Icon href="#"><FaFacebook /></Icon>
                    <Icon href="#"><FaInstagram /></Icon>
                    <Icon href="#"><FaLinkedin /></Icon>
                  </SocialIconContainer>
                </MemberInfo>
              </TeamCard>
            ))}
          </CarouselContainer>
        </TeamContainer>
      </section>
    </div>
  );
};

export default OurTeam;
