import React from 'react';
import Notes from "./Notes";

export const Home = (props) => {
    const { showAlert } = props;

    return (
        <div style={{ backgroundColor: '#f0f2f5', color: '#333', minHeight: '100vh', padding: '20px' }}>
            <h1 style={{ marginBottom: '30px', color: '#007bff' }}>Welcome to iNotebook</h1>
            <Notes showAlert={showAlert} />
        </div>
    );
};

export default Home;
