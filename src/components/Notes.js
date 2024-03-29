import React,{useContext,useEffect,useRef,useState} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router";

const Notes =(props)=>{
    const context = useContext(noteContext);

    const {notes,getNotes,editNotes} = context
    let navigate = useNavigate();
    // const { notes, getNotes, editNotes } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        } 
        else {
            navigate('/Login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id:"",etitle: "", edescription:"",etag:""})


    const updateNote =(currentNote)=>{
      ref.current.click();
      setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    }

    const handleClick=(e)=>{
      console.log("updating the note",note)
      editNotes(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    props.showAlert("Updated Successfully","success")

  }
  const onChange=(e)=>{
 setNote({...note,[e.target.name]:e.target.value})
  }
    
    return(
        <>
        <AddNote showAlert={props.showAlert}/>
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" tyle={{ backgroundColor: '#F7F7F7', color: '#333', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"style={{color:'#2B4257', fontWeight:'bold'}}>Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="my-3" style={{ backgroundColor: '#F7F7F7', color: '#333', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }} >
  <div className="mb-3">
    <label htmlFor="Title" className="form-label"style={{color:'#2B4257',fontSize: '1rem',
        fontWeight: 'bold'}}>Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle}aria-describedby="emailHelp" onChange={onChange}  minLength={5} required style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px'}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label"style={{color:'#2B4257',fontSize: '1rem',
        fontWeight: 'bold'}}>Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription"  value={note.edescription}onChange={onChange} minLength={5} required style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px'}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label"style={{color:'#2B4257',fontSize: '1rem',
        fontWeight: 'bold'}}>Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}  minLength={5} required style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px'}}/>
  </div>
 </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
        <div className="row my-3">
      <h2 className="mx-3 " style={{color:'#2B4257', fontWeight:'bold'}}>Your Notes</h2>
      {notes.map((note)=>{
        return <Noteitem key ={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
        })}
      </div>
      </>
    )
}
export default Notes;
