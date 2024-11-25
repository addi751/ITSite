import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";



const Statistic = () => {
    //slider 
    const images = [
        './pictures/Rectangle 12.png',
        './pictures/Rectangle 13.png',
        './pictures/Rectangle 15.png',
        './pictures/Rectangle 14.png',
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <>
         <StatisticsSection>
         <SliderContainer>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <ImageWrapper key={index}>
                        <StyledImage src={src} alt={`Slide ${index + 1}`} />
                    </ImageWrapper>
                ))}
            </Slider>
        </SliderContainer>

            <ContentContainer>
                <StatsTitle>We specialize in delivering cutting edge 
                IT services tailored to meet the unique 
                needs of businesses across industries. 
                Our expert team is dedicated to 
                providing comprehensive solutions that 
                drive efficiency, enhance security, and 
                foster innovation.
                </StatsTitle>
                <Paragraph>
                    <LinkText href="#">Learn more about our journey</LinkText>
                </Paragraph>
                </ContentContainer>

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

export default Statistic;

// Styled components
    // stats
    const StatisticsSection = styled.section`
    background-color: #000;
    color: #FFF;
    padding: 50px 0;
    text-align: center;
`;
    const SliderContainer = styled.div`
    width: 94%;
    padding: 100px 47px;
    position: 'relative'
    .slick-dots {
        bottom: -30px;
    }
    .slick-dots li button:before {
        font-size: 12px;
        color: #666;
    }
    .slick-dots li.slick-active button:before {
        color: #333;
    }
`;

const ImageWrapper = styled.div`
    padding: 0px 10px;
`;

const StyledImage = styled.img`
    width: 95%;
    height: 80vh;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

const ContentContainer = styled.div`
    max-width: 700px;
    padding: 0 50px;
    text-align: left;
`;

const StatsTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
`;

const Paragraph = styled.p`
    font-size: 1rem;
    margin-bottom: 30px;
`;

const LinkText = styled.a`
    color: #FFF;
    text-decoration: underline;
    cursor: pointer;
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
