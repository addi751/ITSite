import React, { useState } from 'react';

const OurProcess = () => {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        section: {
            backgroundColor: '#000',
            color: '#FFF',
            padding: '80px 80px',
            textAlign: 'center',

        },
        headingContainer: {
            marginBottom: '200px',
        },
        heading: {
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#FFF',
        },
        headingUnderline: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            margin: '0px 350px',
        },
        dot: {
            width: '8px',
            height: '8px',
            backgroundColor: '#6A0DAD',
            borderRadius: '50%',
        },
        line: {
            flex: '0.2',
            height: '3px',
            backgroundColor: '#6A0DAD',
            borderRadius: '2px',
        },
        description: {
            fontSize: '18px',
            color: '#FFF',
            lineHeight: '1.6',
            marginTop: '20px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        contentContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
        },
        card: {
            backgroundColor: '#F0F0F0',
            padding: '40px',
            borderRadius: '8px',
            maxWidth: '300px',
            textAlign: 'center',
            flex: '1',
        },
        cardHeading: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#333',
        },
        cardParagraph: {
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.6',
        },
        buttonContainer: {
            marginTop: '150px',
            textAlign: 'right',
        },
        button: {
            padding: '15px 30px',
            backgroundColor: '#6A0DAD',
            color: '#FFF',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // For smooth transition
            backgroundColor: isHovered ? '#8A2BE2' : '#6A0DAD', // Change color on hover
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.headingContainer}>
                <h2 style={styles.heading}>Our Process</h2>
                <div style={styles.headingUnderline}>
                            <div style={styles.line}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                        </div>
                         {/* Description under the heading */}
                <p style={styles.description}>
                    Our process is designed to deliver high-quality IT solutions that cater to your specific business needs. 
                    We focus on efficiency, reliability, and innovation, ensuring that each project exceeds your expectations.
                </p>
            </div>

            <div style={styles.contentContainer}>
                {/* Card 1 */}
                <div style={styles.card}>
                    <h3 style={styles.cardHeading}>Expert Team</h3>
                    <p style={styles.cardParagraph}>
                        Our team consists of industry experts dedicated to delivering top-notch IT services tailored to your needs.
                    </p>
                </div>

                {/* Card 2 */}
                <div style={styles.card}>
                    <h3 style={styles.cardHeading}>Customized Solutions</h3>
                    <p style={styles.cardParagraph}>
                        We provide solutions designed specifically for your business to ensure maximum efficiency and growth.
                    </p>
                </div>

                {/* Card 3 */}
                <div style={styles.card}>
                    <h3 style={styles.cardHeading}>Reliable Support</h3>
                    <p style={styles.cardParagraph}>
                        Our support team is available 24/7 to assist you with any issues and keep your operations running smoothly.
                    </p>
                </div>

                {/* Card 4 */}
                <div style={styles.card}>
                    <h3 style={styles.cardHeading}>Reliable Support</h3>
                    <p style={styles.cardParagraph}>
                        Our support team is available 24/7 to assist you with any issues and keep your operations running smoothly.
                    </p>
                </div>

            </div>

            {/* See Our Work Button */}
            <div style={styles.buttonContainer}>
                <button
                    style={styles.button}
                    onMouseEnter={() => setIsHovered(true)} // Change to hovered state
                    onMouseLeave={() => setIsHovered(false)} // Revert back to non-hovered state
                >
                    See Our Work
                </button>
            </div>
        </section>
    );
};

export default OurProcess;
