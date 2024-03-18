import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNotes}=context;
    const {note} = props
  return (
    <div className='col-md-3'>
        <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-feather mx-0"></i>
    <i className="fa-solid fa-trash mx-4" onClick={()=>{deleteNotes(note._id)}}></i>
    
  </div>
</div>
    </div>
  )
}

export default Noteitem