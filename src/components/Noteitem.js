import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNotes } = context;
    const { note, updateNote } = props;

    // Define custom styles for the card
    const cardStyles = {
        backgroundColor:'#ECF0F1', // Dark gray background
        border: '1px solid #ced4da',
        borderRadius: '10px',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    // Define styles for title and description
    const titleStyles = {
        color: '#333', // White title text
        fontSize: '1.2rem',
        fontWeight: 'bold',
    };

    const descriptionStyles = {
        color: '#333', // Light gray description text
        fontSize: '1rem',
    };

    // Define styles for icons
    const iconStyles = {
        color: '#007bff', // Blue pencil icon
        cursor: 'pointer',
        marginRight: '0.5rem',
    };

    const deleteIconStyles = {
        color: '#dc3545', // Red trash icon
        cursor: 'pointer',
        marginLeft: '0.5rem',
    };

    return (
        <div className='col-md-3'>
            <div className="card my-3" style={cardStyles}>
                <div className="card-body">
                    <h5 className="card-title" style={titleStyles}>{note.title}</h5>
                    <p className="card-text" style={descriptionStyles}>{note.description}</p>
                    <i className="fas fa-pencil-alt" style={iconStyles} onClick={() => { updateNote(note) }}></i>
                    <i className="fas fa-trash" style={deleteIconStyles} onClick={() => { deleteNotes(note._id); props.showAlert("Deleted Successfully", "danger"); }}></i>
                </div>
            </div>
        </div>
    );
}

export default Noteitem;
