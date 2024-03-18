import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
   const notesinitial=[
    {
      "_id": "65f2f4929508c7b9740796d7",
      "user": "65ef519b3f2dfd866d1a7f7c",
      "title": "48 laws of power",
      "description": "self-help book",
      "tag": "self-improvement",
      "date": "2024-03-14T12:58:58.482Z",
      "__v": 0
    },
    {
      "_id": "65f2f4f99508c7b9740796d9",
      "user": "65ef519b3f2dfd866d1a7f7c",
      "title": "48 laws of power",
      "description": "self-help book",
      "tag": "self-improvement",
      "date": "2024-03-14T13:00:41.014Z",
      "__v": 0
    },
    {
      "_id": "65f2f5039508c7b9740796db",
      "user": "65ef519b3f2dfd866d1a7f7c",
      "title": "48 laws of power",
      "description": "self-help",
      "tag": "self-improvement",
      "date": "2024-03-14T13:00:51.305Z",
      "__v": 0
    },
    {
      "_id": "65f34353012296758a02ddb7",
      "user": "65ef519b3f2dfd866d1a7f7c",
      "title": "new note",
      "description": "notes",
      "tag": "n-1",
      "date": "2024-03-14T18:34:59.835Z",
      "__v": 0
    },
    {
      "_id": "65f349bd4e2a02548e160d03",
      "user": "65ef519b3f2dfd866d1a7f7c",
      "title": "new note",
      "description": "notes",
      "tag": "n-1",
      "date": "2024-03-14T19:02:21.505Z",
      "__v": 0
    },
    {
      "_id": "65f34dfce579de3e1bdbd73f",
      "user": "65ef519b3f2dfd866d1a7f7c",
      "title": "new note-1",
      "description": "notes",
      "tag": "n-1",
      "date": "2024-03-14T19:20:28.705Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesinitial)
  
  //Add the notes
  const addNotes = (title,description,tag)=>{
const note= {
    "_id": "65f34dfce579de3e1bdbd73f",
    "user": "65ef519b3f2dfd866d1a7f7c1",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2024-03-14T19:20:28.705Z",
    "__v": 0
  };
  setNotes(notes.concat(note))
  }

  //Delete Notes
  const deleteNotes = (id)=>{
const newNotes =notes.filter((note)=>{return note._id!==id})
setNotes(newNotes)
  }

  //Edit Notes
  const editNotes = ()=>{

  }
return(
    <NoteContext.Provider value={{notes,addNotes,deleteNotes,editNotes}}>
      {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;