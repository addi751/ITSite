import React from 'react';
import Slider from 'react-slick';

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const styles = {
        section: {
            padding: '50px 300px',
            margin: '0 auto',
            backgroundColor: 'white',
        },
        headingContainer: {
            textAlign: 'center',
            marginBottom: '30px',
        },
        heading: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#333',
        },
        underline: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            gap: '8px',
        },
        dot: {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#B0B0B0',
        },
        activeDot: {
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#333',
        },
        card: {
            maxWidth: '500px',
            margin: '0 auto',
            padding: '30px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px',
        },
        companyLogo: {
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            objectFit: 'contain',
        },
        companyName: {
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#333',
        },
        testimonialBody: {
            textAlign: 'center',
            padding: '10px 0',
        },
        testimonialText: {
            fontSize: '18px',
            color: '#555',
            lineHeight: '1.6',
        },
        footer: {
            marginTop: '20px',
            fontStyle: 'italic',
            color: '#777',
        },
    };

    return (
        <section style={styles.section}>
            {/* Heading Section */}
            <div style={styles.headingContainer}>
                <h2 style={styles.heading}>What Our Clients Say</h2>
                <div style={styles.underline}>
                    <div style={styles.dot}></div>
                    <div style={styles.activeDot}></div>
                    <div style={styles.dot}></div>
                </div>
            </div>

            {/* Slider Component */}
            <Slider {...settings}>
                {/* Slide 1 */}
                <div style={styles.card}>
                    <div style={styles.header}>
                        <img
                            src="./pictures/OIF.png"
                            alt="Company Logo"
                            style={styles.companyLogo}
                        />
                        <h3 style={styles.companyName}>TXNM Energy</h3>
                    </div>
                    <div style={styles.testimonialBody}>
                        <p style={styles.testimonialText}>
                            “The service provided by the team was exceptional. We saw an immediate impact on our business growth.”
                        </p>
                    </div>
                    <div style={styles.footer}>- John Doe, CEO</div>
                </div>

                {/* Slide 2 */}
                <div style={styles.card}>
                    <div style={styles.header}>
                        <img
                            src="./pictures/Koskisen_logo_2020_horizontal.png"
                            alt="Company Logo"
                            style={styles.companyLogo}
                        />
                        <h3 style={styles.companyName}>Koskisen Tech</h3>
                    </div>
                    <div style={styles.testimonialBody}>
                        <p style={styles.testimonialText}>
                            “A truly outstanding experience! The support was top-notch, and the results exceeded our expectations.”
                        </p>
                    </div>
                    <div style={styles.footer}>- Jane Smith, CTO</div>
                </div>

                {/* Slide 3 */}
                <div style={styles.card}>
                    <div style={styles.header}>
                        <img
                            src="./pictures/eskom logo color RGB_1.png"
                            alt="Company Logo"
                            style={styles.companyLogo}
                        />
                        <h3 style={styles.companyName}>eskom LLC</h3>
                    </div>
                    <div style={styles.testimonialBody}>
                        <p style={styles.testimonialText}>
                            “I highly recommend their services. Professional, efficient, and effective – they delivered beyond what was promised.”
                        </p>
                    </div>
                    <div style={styles.footer}>- Michael Brown, Founder</div>
                </div>
            </Slider>
        </section>
    );
};

export default TestimonialSlider;
