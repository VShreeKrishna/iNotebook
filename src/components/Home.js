import React from 'react';
import Notes from "./Notes";

export const Home = (props) => {
    const { showAlert } = props;

    return (
        <div style={{ backgroundColor: '#F7F7F7', color: '#333', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '30px', color: '#2B4257', fontWeight: 'bold', fontSize: '2.5rem' }}>Welcome to iNotebook</h1>
                {/* <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>Your ultimate companion for organizing and managing your notes efficiently.</p> */}
            </div>
            <Notes showAlert={showAlert} />
        </div>
    );
};

export default Home;
