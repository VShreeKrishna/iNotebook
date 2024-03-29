import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const host= "http://localhost:5000"
   const notesinitial=[]

  const [notes, setNotes] = useState(notesinitial)

  //get all notes
  //Add the notes
  const getNotes= async ()=> {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
       }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  
  //Add the notes
  const addNotes = async (title,description,tag)=>{
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
       
        body: JSON.stringify({title,description,tag}), 
      });

      const note =await response.json();
      setNotes(notes.concat(note))
  }


  //Delete Notes
  const deleteNotes = async (id)=>{
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      } 
    });
    const json =await response.json()
    console.log(json)
    
    
    console.log("delete the note with id:", id);
const newNotes =notes.filter((note)=>{return note._id!==id})
setNotes(newNotes)
  }

  //Edit Notes
  const editNotes = async (id,title,description,tag)=>{
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
         },
       
        body: JSON.stringify({title,description,tag}), 
      });
     const json = await response.json(); 
     console.log(json)

    let newNotes =JSON.parse(JSON.stringify(notes));
    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag
            break;
        }
   
    }
    setNotes(newNotes)
  }
return(
    <NoteContext.Provider value={{notes,addNotes,deleteNotes,editNotes,getNotes}}>
      {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;