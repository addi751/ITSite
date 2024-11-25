import React from 'react';

const WhyChooseUs = () => {
    const styles = {
        section: {
            backgroundColor: '#000',
            color: '#FFF',
            padding: '80px 20px',
            textAlign: 'center',

        },
        headingContainer: {
            marginBottom: '100px',
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
            backgroundColor: '#007BFF',
            borderRadius: '50%',
        },
        line: {
            flex: '0.5',
            height: '3px',
            backgroundColor: '#007BFF',
            borderRadius: '2px',
        },
        contentContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
        },
        card: {
            backgroundColor: '#F0F0F0',
            padding: '80px',
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
    };

    return (
        <section style={styles.section}>
            <div style={styles.headingContainer}>
                <h2 style={styles.heading}>Why You Choose Us</h2>
                <div style={styles.headingUnderline}>
                            <div style={styles.line}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                        </div>
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
            </div>
        </section>
    );
};

export default WhyChooseUs;
