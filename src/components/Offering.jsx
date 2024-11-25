import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OfferingsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const styles = {
        section: {
            padding: '60px 100px',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
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
            gap: '5px',
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
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '40px',
        },
        card: {
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
        },
        image: (isHovered) => ({
            width: '100%',
            height: '50vh',
            objectFit: 'fill',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }),
        overlay: {
            position: 'absolute',
            top: 310,
            left: 10,
            width: '85%',
            height: '10%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '20px',
        },
        title: {
            fontSize: '18px',
            color: '#FFFFFF',
            fontWeight: 'bold',
        },
        buttonContainer: {
            marginTop: '40px',
        },
        button: {
            padding: '10px 30px',
            backgroundColor: '#6A0DAD',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
    };

    const offerings = [
        { title: 'Business Planning', image: './pictures/Rectangle 3.png', link: '/web' },
        { title: 'UI/UX Design', image: './pictures/UIUX.png', link: '/web' },
        { title: 'Web Development', image: './pictures/Group 44.png', link: '/web' },
        { title: 'Business Planning', image: './pictures/Rectangle 3.png', link: '/web' },
        { title: 'UI/UX Design', image: './pictures/UIUX.png', link: '/web' },
        { title: 'Web Development', image: './pictures/Group 44.png', link: '/web' },
    ];

    const handleNavigation = (link) => {
        navigate(link);
    };

    return (
        <section style={styles.section}>
            {/* Heading */}
            <h2 style={styles.heading}>Our Offerings</h2>
            <div style={styles.underline}>
                <div style={styles.dot}></div>
                <div style={styles.activeDot}></div>
                <div style={styles.dot}></div>
            </div>

            {/* Grid Layout */}
            <div style={styles.gridContainer}>
                {offerings.map((item, index) => (
                    <div
                        key={index}
                        style={styles.card}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleNavigation(item.link)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            style={styles.image(hoveredIndex === index)}
                        />
                        <div style={styles.overlay}>
                            <h3 style={styles.title}>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div style={styles.buttonContainer}>
                <button
                    style={styles.button}
                    onClick={() => handleNavigation('/web')}
                    onMouseEnter={() => setHoveredIndex('button')}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    See Our Work
                </button>
            </div>
        </section>
    );
};

export default OfferingsSection;
