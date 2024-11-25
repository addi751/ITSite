import React, { useState } from 'react';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const styles = {
        section: {
            backgroundColor: 'white',
            padding: '100px 20px',
            textAlign: 'center',
            fontFamily: 'Euclid Circular A, sans-serif',
        },
        heading: {
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '0px',
        },
        headingUnderline: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            margin: '0px 550px',
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
        faqContainer: {
            maxWidth: '1000px',
            textAlign: 'left',
            margin: '0 auto',
            marginTop: '40px',
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '10px',
        },
        faqItem: {
            marginBottom: '10px',
            borderBottom: '2px solid #CCC',
            padding: '15px 40px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
        },
        faqItemHover: {
            backgroundColor: '#6A0DAD',
            color: '#fff',
            transform: 'scale(1.05)',
        },
        question: {
            fontSize: '24px',
            fontWeight: '',
            color: '#333',
            margin: '0',
        },
        answer: {
            fontSize: '18px',
            color: 'white',
            padding: '10px 0',
            display: 'none', // Default to hidden
            transition: 'height 0.3s ease',
            lineHeight: '1.6',
        },
        answerActive: {
            display: 'block', // Show answer when active
        },
        icon: {
            float: 'right',
            fontSize: '20px',
            transition: 'transform 0.3s ease',
        },
        iconActive: {
            transform: 'rotate(180deg)', // Rotate icon when active
        },
    };

    const faqData = [
        {
            question: 'What is your return policy?',
            answer: 'Our return policy allows you to return items within 30 days of purchase for a full refund.',
        },
        {
            question: 'How long will delivery take?',
            answer: 'We offer standard delivery that takes 5-7 business days, or express delivery for 1-2 business days.',
        },
        {
            question: 'Do you offer gift wrapping?',
            answer: 'Yes, we provide gift wrapping services for a small fee, available at checkout.',
        },
        {
            question: 'Can I change my order after placing it?',
            answer: 'Once your order is placed, we can modify it within the first hour. Please contact customer support.',
        },
        {
            question: 'What is your return policy?',
            answer: 'Our return policy allows you to return items within 30 days of purchase for a full refund.',
        },
        {
            question: 'How long will delivery take?',
            answer: 'We offer standard delivery that takes 5-7 business days, or express delivery for 1-2 business days.',
        },
        {
            question: 'Do you offer gift wrapping?',
            answer: 'Yes, we provide gift wrapping services for a small fee, available at checkout.',
        },
        {
            question: 'Can I change my order after placing it?',
            answer: 'Once your order is placed, we can modify it within the first hour. Please contact customer support.',
        },
    ];

    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>FAQs</h2>
            <div style={styles.headingUnderline}>
                            <div style={styles.line}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
            </div>
            <div style={styles.faqContainer}>
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.faqItem,
                            ...(activeIndex === index ? styles.faqItemHover : {}),
                        }}
                        onClick={() => handleToggle(index)}
                    >
                        <div style={styles.question}>
                            {faq.question}
                            <span
                                style={{
                                    ...styles.icon,
                                    ...(activeIndex === index ? styles.iconActive : {}),
                                }}
                            >
                                &#9660;
                            </span>
                        </div>
                        <div
                            style={{
                                ...styles.answer,
                                ...(activeIndex === index ? styles.answerActive : {}),
                            }}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;
