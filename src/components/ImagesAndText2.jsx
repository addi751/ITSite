import React from 'react';

const ImageAndText = () => {
    // Styled components
    const style = {
        container: {
            padding: '60px 60px',
            fontFamily: 'Arial, sans-serif',
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
        imageContainer2: {
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
        headingUnderline: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            margin: '8px 0',
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
        paragraph: {
            fontSize: '24px',
            color: '#555',
            lineHeight: '1.6',
            margin: '80px 0px',

        },
        
    };

    return (
        <>
            {/* Image and Text Section 1 */}
            <div style={style.container}>
                <div style={style.content}>
                    {/* Image */}
                    <div style={style.imageContainer}>
                        <img
                            src="./pictures/Capture20241110140902.png"
                            alt="IT Services"
                            style={style.image}
                        />
                    </div>

                    {/* Text Content */}
                    <div style={style.textContent}>
                        <h3 style={style.subHeading}>Our Mission</h3>
                        <div style={style.headingUnderline}>
                            <div style={style.line}></div>
                            <div style={style.dot}></div>
                            <div style={style.dot}></div>
                            <div style={style.dot}></div>
                        </div>
                        <p style={style.paragraph}>
                            We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
                        </p>
                        
                    </div>
                </div>
            </div>

            {/* Image and Text Section 2 */}
            <div style={style.container}>
                <div style={style.content}>
                    {/* Text Content */}
                    <div style={style.textContent}>
                        <h3 style={style.subHeading}>Our Goals</h3>
                        <div style={style.headingUnderline}>
                        <div style={style.line}></div>
                            <div style={style.dot}></div>
                            <div style={style.dot}></div>
                            <div style={style.dot}></div>
                        </div>
                        <p style={style.paragraph}>
                            We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
                        </p>
                        
                    </div>

                    {/* Image */}
                    <div style={style.imageContainer2}>
                        <img
                            src="./pictures/Capture20241110140936.png"
                            alt="IT Services"
                            style={style.image}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageAndText;
