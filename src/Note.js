import React from "react";
import { useState , useEffect } from "react"


const Note = () => {

    const NotesData = JSON.parse(localStorage.getItem('note'))
    const [note , setNote] = useState(NotesData || []) // array of notes
    const [title , setTitle] = useState('') 
    const [body , setBody] = useState('')

    

    useEffect(()=>{
        console.log('This should only run once')
    },[]) // here it only runs once , not again because the array is left empty

    useEffect(()=>{
        console.log('changing document title')
        document.title = note.length
        
    } , [note]) // [note] makes the useEffect to run when only the count changes , lest it will run even if some other thing runs. 
    const addNote = (e) =>{
        e.preventDefault()
        setNote([
            ...note,
            {title , body} // creating a new object with title and body as property. 

        ])

        setTitle('') // emptying the state of title so that new title can be added [emptying the form]
        setBody('')
    }

    const removeNote = (title) =>{
        setNote(note.filter((note)=>note.title !== title))
    }


    useEffect(()=>{
        const noteData = JSON.parse(localStorage.getItem('note'))   // same as  second lines of const Note
        if (noteData){
            setNote(noteData)
        }
    },[])

    useEffect(()=>{                                                 // same as first line of const Note
        localStorage.setItem('note',JSON.stringify(note))
    },[note])
    
    return(
        <div>
            <h1>NOTES</h1>
            {note.map((note)=>{
                return(
                    <div key={note.title}>
                        <h2>{note.title}</h2>
                        <h2 style={{marginLeft:'50px', display:'flex',backgroundColor:'black' , color:'gold',}} >{note.body}</h2>
                        <button onClick={()=>removeNote(note.title)} >X</button>
                    </div>
                )
            })}
            <form onSubmit={addNote}>
                <input value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

                <button>ADD NOTE</button>
            </form>
        </div>
    )

}

export default Note ; 







