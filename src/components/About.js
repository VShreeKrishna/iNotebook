import React, { useContext, useEffect } from 'react';

const About = () => {
    return (
        <div style={{ color: '#333', backgroundColor: '#F7F7F7', padding: '20px', borderRadius: '10px' }}>
            <h2 style={{ color: '#2B4257' }}>About iNotebook:</h2>
            <p>
                Welcome to iNotebook, your ultimate companion for organizing and managing your notes efficiently. iNotebook is designed to empower you to write, store, and secure your notes seamlessly, ensuring that your thoughts and ideas are always at your fingertips.
            </p>
            <h3 style={{ color: '#2B4257'  }}>Features:</h3>
            <ul>
                <li><strong>Write and Store:</strong> With iNotebook, you can effortlessly jot down your thoughts, ideas, tasks, or anything you want to remember. Our intuitive interface makes it easy to write and organize your notes exactly how you like them.</li>
                <li><strong>Keep Your Notes Safe:</strong> We understand the importance of privacy and security when it comes to your personal notes. iNotebook employs robust security measures to keep your data safe, ensuring that only you have access to your notes.</li>
                <li><strong>Organize Your Notes:</strong> iNotebook offers powerful organizational features, allowing you to categorize your notes into different notebooks or tags. Whether you're a student, professional, or creative individual, iNotebook adapts to your unique organizational needs.</li>
                <li><strong>Sync Across Devices:</strong> Never worry about losing your notes again. iNotebook seamlessly syncs your notes across all your devices, ensuring that you can access and edit your notes anytime, anywhere.</li>
                <li><strong>Customizable Experience:</strong> Personalize your iNotebook experience to suit your preferences. Choose from a variety of themes, fonts, and customization options to make iNotebook truly your own.</li>
            </ul>
            <h3 style={{ color: '#2B4257'  }}>Why Choose iNotebook?</h3>
            <ul>
                <li><strong>Simplicity:</strong> iNotebook offers a simple and intuitive interface, making it easy for anyone to start organizing their notes instantly.</li>
                <li><strong>Reliability:</strong> Backed by robust technology and continuous updates, iNotebook ensures a reliable and hassle-free note-taking experience.</li>
                <li><strong>Privacy:</strong> Your privacy is our top priority. With end-to-end encryption and secure cloud storage, iNotebook keeps your notes safe and confidential.</li>
            </ul>
            <p>Get Started Today! Experience the convenience and power of iNotebook for yourself. Download iNotebook now and take control of your notes like never before.</p>
        </div>
    );
};

export default About;
