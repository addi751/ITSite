import React, { useState } from 'react';



const ImageAndText = () => {
    const [isHovered, setIsHovered] = useState(false); // Add this line

    // Styled components
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

    //image and text 
    const style = {
        container: {
            padding: '60px 60px',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '60px',
            position: 'relative',
        },
        headingUnderline: {
            display: 'block',
            margin: '8px auto',
            width: '80px',
            height: '3px',
            backgroundColor: '#007BFF',
            borderRadius: '2px',
        },
        content: {
            display: 'flex',
            gap: '0px',
        },
        imageContainer: {
            flex: '1',
            display: 'flex',
            justifyContent: 'left',
        },
        image: {
            width: '100%',
            maxWidth: '750px',
            borderRadius: '8px',
        },
        textContent: {
            flex: '1',
            maxWidth: '650px',
            marginRight: '0px',
            justifyContent: 'left',
            textAlign: 'left',
        },
        subHeading: {
            maxWidth: '600px',
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: '24px',
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '15px',
        },
        list: {
            fontSize: '20px',
            listStyleType: 'disc',
            paddingLeft: '20px',
            marginBottom: '55px',
            color: '#555',
            fontWeight: 'bold'
        },
        link: {
            fontSize: '16px',
            color: '#007BFF',
            textDecoration: 'none',
            fontWeight: 'bold',
        },
    };

        //image and text 2
        const style2 = {
            container: {
                padding: '20px 60px',
                fontFamily: 'Arial, sans-serif',
            },
            content: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0px',
            },
            imageContainer: {
                flex: '1',
                display: 'flex',
                justifyContent: 'right',
            },
            image: {
                width: '100%',
                maxWidth: '750px',
                borderRadius: '8px',
            },
            textContent: {
                flex: '1',
                maxWidth: '650px',
                marginRight: '0px',
                justifyContent: 'left',
                textAlign: 'left',
            },
            subHeading: {
                maxWidth: '600px',
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px',
            },
            paragraph: {
                fontSize: '24px',
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '15px',
            },
            list: {
                fontSize: '20px',
                listStyleType: 'disc',
                paddingLeft: '20px',
                marginBottom: '55px',
                color: '#555',
                fontWeight: 'bold'
            },
            link: {
                fontSize: '16px',
                color: '#007BFF',
                textDecoration: 'none',
                fontWeight: 'bold',
            },
        };
        
   
    return (
        <>
        {/* image and text section */}
        <div style={style.container}>
            {/* Heading */}
            <h2 style={style.heading}>
                Everything You Need To Get Ahead
                <span style={style.headingUnderline}></span>
            </h2>
            
            <div style={style.content}>
                {/* Image */}
                <div style={style.imageContainer}>
                    <img 
                        src="./pictures/Rectangle 6.png" 
                        alt="IT Services" 
                        style={style.image}
                    />
                </div>

                {/* Text Content */}
                <div style={style.textContent}>
                    <h3 style={style.subHeading}>The Fastest Hiring And Payments</h3>
                    <p style={style.paragraph}>
                        We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
                    </p>
                    <ul style={style.list}>
                        <li>Managed IT Services</li>
                        <li>Cloud Solution</li>
                        <li>Cybersecurity</li>
                        <li>IT Consulting</li>
                    </ul>
                    <a href="#" style={style.link}>Pay your external workforce in one click.</a>
                </div>
            </div>
        </div>

        {/* image and text section 2*/}
        <div style={style.container}>
            <div style={style.content}>
                {/* Text Content */}
                <div style={style2.textContent}>
                    <h3 style={style.subHeading}>The Fastest Hiring And Payments</h3>
                    <p style={style.paragraph}>
                        We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
                    </p>
                    <ul style={style.list}>
                        <li>Managed IT Services</li>
                        <li>Cloud Solution</li>
                        <li>Cybersecurity</li>
                        <li>IT Consulting</li>
                    </ul>
                    <a href="#" style={style.link}>Pay your external workforce in one click.</a>
                </div>

                {/* Image */}
                <div style={style2.imageContainer}>
                    <img 
                        src="./pictures/Rectangle 7.png" 
                        alt="IT Services" 
                        style={style.image}
                    />
                </div>
            </div>
        </div>

        {/* image and text section 3*/}
        <div style={style.container}>        
            <div style={style.content}>
                {/* Image */}
                <div style={style.imageContainer}>
                    <img 
                        src="./pictures/img2.png" 
                        alt="IT Services" 
                        style={style.image}
                    />
                </div>

                {/* Text Content */}
                <div style={style.textContent}>
                    <h3 style={style.subHeading}>The Fastest Hiring And Payments</h3>
                    <p style={style.paragraph}>
                        We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
                    </p>
                    <ul style={style.list}>
                        <li>Managed IT Services</li>
                        <li>Cloud Solution</li>
                        <li>Cybersecurity</li>
                        <li>IT Consulting</li>
                    </ul>
                    <a href="#" style={style.link}>Pay your external workforce in one click.</a>
                </div>
            </div>
        </div>
           
           
         {/* that alot Section Below */}
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

    </>
    );
};

export default ImageAndText;

