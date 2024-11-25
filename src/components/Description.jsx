import React, { useState } from 'react';

const ServiceDescriptionSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); 
    const styles = {
        section: {
            padding: '80px 100px',
            backgroundColor: '#FFFFFF',
        },
        subHeading: {
            maxWidth: '600px',
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
        },
        headingUnderline: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            margin: '10px 40px',
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
            fontWeight: 'bold',
            color: 'black',
            padding: '60px 100px',
            lineHeight: '1.6',
            textAlign: 'justify',
            maxWidth: '1300px',
            marginBottom: '40px',
        },
        contentContainer: {
            display: 'flex',
            textAlign: 'center',
            gap: '20px',
        },
        serviceList: {
            alignItems: '',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            fontSize: '28px',
            color: '#333',
            margin:'120px 30px'
        },
        serviceItem: {
            padding: '10px',
            maxWidth: '400px',
            borderBottom: '2px solid #CCC',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
        },
        serviceItemHovered: {
            backgroundColor: '#6F42C1', 
            color: '#FFF', 
        },
        imageContainer: {
            flex: '1.5',
            position: 'relative',
        },
        image: {
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            objectFit: 'cover',
        },
        advantagesSection: {
            marginTop: '100px',
        },
        advantagesHeading: {
            textAlign: 'left',
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
        },
        advantagesList: {
            listStyleType: 'disc',
            paddingLeft: '120px',
            fontSize: '20px',
            color: '#666',
            lineHeight: '3',
        },
    };

    return (
        <section style={styles.section}>
            {/* Service Description Heading */}
            <h3 style={styles.subHeading}>Service Description</h3>
                        <div style={styles.headingUnderline}>
                            <div style={styles.line}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                        </div>

            {/* Service Description Text */}
            <p style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh non venenatis purus
                nunc. In suscipit eget tristique pretium. Congue quam diam enim mi pellentesque
                augue arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh non venenatis purus
                nunc. In suscipit eget tristique pretium. Congue quam diam enim mi pellentesque
                augue arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh non venenatis purus
                nunc. In suscipit eget tristique pretium. Congue quam diam enim mi pellentesque
                augue arcu.
            </p>

            {/* Service List and Image Container */}
            <div style={styles.contentContainer}>
                {/* List of Services */}
                <div style={styles.serviceList}>
                    {['Front-End Development', 'Back-End Development', 'CMS Integration', 'WordPress Development', 'Shopify Development'].map((service, index) => (
                        <div
                        key={index}
                        style={hoveredIndex === index ? { ...styles.serviceItem, ...styles.serviceItemHovered } : styles.serviceItem}
                        onMouseEnter={() => setHoveredIndex(index)} // Set hover state
                        onMouseLeave={() => setHoveredIndex(null)} // Reset hover state
                    >
                            {service}
                        </div>
                    ))}
                </div>

                {/* Image with Overlay */}
                <div style={styles.imageContainer}>
                    <img
                        src="./pictures/Rectangle 84.png"
                        alt="Web"
                        style={styles.image}
                    />
                </div>
            </div>

            {/* Advantages Section */}
            <div style={styles.advantagesSection}>
                <h2 style={styles.advantagesHeading}>Advantages</h2>
                <div style={styles.headingUnderline}>
                            <div style={styles.line}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                </div>
                <ul style={styles.advantagesList}>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Tristique morbi suspendisse sit vestibulum.</li>
                    <li>Dictum velit eros arcu morbi augue egestas.</li>
                    <li>Congue facilisis senectus amet commodo.</li>
                    <li>Ac eu malesuada quam arcu consectetur aliquam.</li>
                </ul>
            </div>
        </section>
    );
};

export default ServiceDescriptionSection;
