import React,{useContext,useState} from "react";
import noteContext from "../context/notes/noteContext";


const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNotes} = context
    const [note, setNote] = useState({title: "", description:"",tag:""})

    const handleClick=(e)=>{
        e.preventDefault();
        addNotes(note.title,note.description,note.tag)
        setNote({title: "", description:"",tag:""})
        props.showAlert("Added Successfully","success")
    }
    
    const onChange=(e)=>{
   setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3">
        <h2 className="mx-1 "style={{color:'#2B4257', fontWeight:'bold'}}>Add a new Note </h2>
         <form className="my-3" style={{ backgroundColor: '#F7F7F7', color: '#333', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label" style={{color:'#2B4257',fontSize: '1rem',
        fontWeight: 'bold'}}>Title</label>
    <input type="text" className="form-control" id="title" name="title"aria-describedby="emailHelp" value={note.title}onChange={onChange}  minLength={5} required  style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px' }}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label"style={{color:'#2B4257',fontSize: '1rem',
        fontWeight: 'bold'}} >Description</label>
    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}  minLength={5} required  style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px' }}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label"style={{color:'#2B4257',fontSize: '1rem',
        fontWeight: 'bold'}}>Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}  minLength={5} required  style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px' }}/>
  </div>
  <button  disabled={note.title.length<5 || note.description.length<5}type="submit" className="btn btn-primary"style={{ backgroundColor: '#001233', border: 'none', borderRadius: '5px', padding: '10px 20px', fontWeight: 'bold' }} onClick={handleClick}>Add Note</button>
 
</form>
    </div>
  )
}

export default AddNote