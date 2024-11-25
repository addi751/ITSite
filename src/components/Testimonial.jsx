import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Testimonial = () => {
    const [isHovered, setIsHovered] = useState(false); // Add this line



   const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      profileImage: "./pictures/Rectangle 55.png",
      reviewer: "JOHN SMITH",
      role: "CUSTOMER, AGENT",
      text: "Give your company a faster, more agile way to work with freelancers and contractors...",
    },
    {
      id: 2,
      profileImage: "./pictures/Rectangle 55.png",
      reviewer: "JANE DOE",
      role: "CUSTOMER, MANAGER",
      text: "Our experience with contractors has never been smoother. Highly recommend this service!",
    },
    {
      id: 3,
      profileImage: "./pictures/Rectangle 55.png",
      reviewer: "SAM WILSON",
      role: "FREELANCER",
      text: "An excellent platform to work with clients seamlessly and efficiently.",
    },
    {
      id: 4,
      profileImage: "./pictures/Rectangle 55.png",
      reviewer: "LISA BROWN",
      role: "PROJECT MANAGER",
      text: "Highly organized and streamlined service for businesses and contractors alike.",
    },
    {
      id: 5,
      profileImage: "./pictures/Rectangle 55.png",
      reviewer: "PAUL ANDERSON",
      role: "ENTREPRENEUR",
      text: "A fantastic experience with top-notch customer support and compliance!",
    },
    {
        id: 6,
        profileImage: "./pictures/Rectangle 55.png",
        reviewer: "PAUL ANDERSON",
        role: "ENTREPRENEUR",
        text: "A fantastic experience with top-notch customer support and compliance!",
      },
      {
        id: 7,
        profileImage: "./pictures/Rectangle 55.png",
        reviewer: "PAUL ANDERSON",
        role: "ENTREPRENEUR",
        text: "A fantastic experience with top-notch customer support and compliance!",
      },
  ];

  const totalCards = testimonials.length;
  const maxIndex = totalCards - 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

    return (
        <>
       {/* testimonial section */}
        <TestimonialSection>
      <Heading>
        Don't just take our word for it..
        <DotContainer>
          {Array.from({ length: totalCards - 2 }).map((_, index) => (
            <Dot key={index} active={index === currentIndex} />
          ))}
        </DotContainer>
      </Heading>
      <CarouselContainer>
        <Arrow left onClick={prevSlide}>&#10094;</Arrow>
        <CarouselWrapper currentIndex={currentIndex}>
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex + 1; // Center card is always active
            return (
              <Card key={testimonial.id}>
                <CardContent>
                  <ReviewTitleContainer>
                    <StarIcon isActive={isActive}>★</StarIcon>
                    <ReviewTitle>REVIEW</ReviewTitle>
                  </ReviewTitleContainer>
                  <ReviewerInfo>
                    <ProfileImage src={testimonial.profileImage} alt={`${testimonial.reviewer} profile`} />
                    <ReviewerDetails>
                      <ReviewerName>{testimonial.reviewer}</ReviewerName>
                      <ReviewerRole>{testimonial.role}</ReviewerRole>
                    </ReviewerDetails>
                  </ReviewerInfo>
                  <ReviewText>{testimonial.text}</ReviewText>
                </CardContent>
              </Card>
            );
          })}
        </CarouselWrapper>
        <Arrow onClick={nextSlide}>&#10095;</Arrow>
        </CarouselContainer>

     {/* that alot */}
         {/* Highlighted Section Below */}
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

         </TestimonialSection>

</>
    );
};

export default Testimonial;

// Styled components
// testmonials
const TestimonialSection = styled.section`
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0px 0.6rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ currentIndex }) => currentIndex * -33.33}%);
`;

const Card = styled.div`
  min-width: 33.33%;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const CardContent = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: white;
  text-align: left;
`;

const ReviewTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StarIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ isActive }) => (isActive ? "green" : "red")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
  margin-right: 8px;
`;

const ReviewTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ReviewerDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
`;

const ReviewerName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;

const ReviewerRole = styled.p`
  font-size: 0.85rem;
  color: gray;
`;

const ReviewText = styled.p`
  font-size: 0.85rem;
  color: #555;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.div`
  height: 8px;
  width: 8px;
  margin: 0 4px;
  background-color: ${({ active }) => (active ? "#6200EA" : "#ccc")};
  border-radius: 50%;
  display: inline-block;
`;

const styles = {
   
    highlightHeading: {
        backgroundColor: '#f0f0f0',
        padding: '50px 50px',
        width: '85%',
        height: '15vh',
        textAlign: 'left',
        fontSize: '22px',
        fontWeight:'bold',
        color: '#333',
        marginTop: '50px',
        marginLeft: '70px'
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