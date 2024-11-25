import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '40px 90px',
            backgroundColor: '#000',
            color: '#FFF',
            fontFamily: 'Arial, sans-serif',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            marginRight: '40px',
            
        },
        columns: {
            display: 'flex',
            flexDirection: 'column',
            marginRight: '40px',
            paddingTop:'120px',
        },
        logoText: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '60px',
        },
        description: {
            maxWidth: '250px',
            lineHeight: '1.6',
            fontSize: '14px',
            color: '#CCC',
        },
        sectionHeading: {
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '20px',
        },
        link: {
            fontSize: '14px',
            color: '#CCC',
            marginBottom: '20px',
            cursor: 'pointer',
            textDecoration: 'none',
        },
        socialIconsContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        socialIcons: {
            display: 'flex',
            gap: '20px',
        },
        icon: {
            width: '30px',
            height: '30px',
        }
    };

    return (
        <footer style={styles.footer}>
            {/* Logo and Description */}
            <div style={styles.column}>
                <div style={styles.logoText}>LOGO</div>
                <p style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.
                </p>
            </div>

            {/* Services Links */}
            <div style={styles.columns}>
                <div style={styles.sectionHeading}>Services</div>
                <a href="#" style={styles.link}>Web Development</a>
                <a href="#" style={styles.link}>UI/UX Design</a>
                <a href="#" style={styles.link}>Graphic Design</a>
                <a href="#" style={styles.link}>Business Planning</a>
            </div>

            {/* Useful Links */}
            <div style={styles.columns}>
                <div style={styles.sectionHeading}>Useful Links</div>
                <a href="#" style={styles.link}>Lorem</a>
                <a href="#" style={styles.link}>Contact Us</a>
                <a href="#" style={styles.link}>Lorem ipsum</a>
                <a href="#" style={styles.link}>Testimonials</a>
            </div>

            {/* Social Media Icons */}
            <div style={styles.columns}>
                <div style={styles.sectionHeading}>Follow Us</div>
                <div style={styles.socialIconsContainer}>
                    {/* First row of social icons */}
                    <div style={styles.socialIcons}>
                        <a href="#"><img style={styles.icon} src="./pictures/instagram-logo-png-transparent-background.png" alt="Instagram" /></a>
                        <a href="#"><img style={styles.icon} src="./pictures/R.png" alt="Facebook" /></a>
                        <a href="#"><img style={styles.icon} src="./pictures/imgbin-linkedin-youtube-social-media-facebook-company-studying-YPEq3nkgS4s4AxyfpNUeV2j08_t.png" alt="LinkedIn" /></a>
                    </div>
                    {/* Second row of social icons */}
                    <div style={styles.socialIcons}>
                        <a href="#"><img style={styles.icon} src="./pictures/R (1).png" alt="Twitter" /></a>
                        <a href="#"><img style={styles.icon} src="./pictures/R (2).png" alt="YouTube" /></a>
                        <a href="#"><img style={styles.icon} src="./pictures/R (3).png" alt="Behance" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
