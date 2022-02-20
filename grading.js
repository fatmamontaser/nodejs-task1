  const fs = require('fs')
// const { conflicts } = require('yargs')
// const { title } = require('process')
 
 const addNote =(id,name,degree,comment)=>{

 const notes = loadNotes()

 const duplicateTitles = notes.find((note)=>{
    return note.id===id
 })
 
 const total= degree.reduce((a,b)=>{

    return a+b
 })

 if(!duplicateTitles){
    notes.push({
        id,
        name,
        degree, 
        comment,
        total
      
    })
    seveNots(notes)
    console.log('save')
 } else{
    console.log('error')
 }
 }
 const loadNotes=()=>{

try{
    const data = fs.readFileSync('notes.json').toString() 
    return JSON.parse(data)
}
catch(e){
    return []

}

}

const  seveNots=(notes)=>{
     const saveData =JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}


 const removeNote =(id)=>{
 const notes = loadNotes()
const notesToKeep = notes.filter((note)=>{
    return note.id !== id
 })

 
 if(notesToKeep.length !== notes.length){
    seveNots(notesToKeep)
    console.log('Removed')
 }
 
 }


const readNotes=(id)=>{
    const notes = loadNotes()
    console.log(notes)
    const noteList = notes.find((el)=>{
        return el.id ===id
    })
    console.log(noteList)

    if(noteList){
        console.log(noteList.name,noteList.degree,noteList.comment,noteList.total)
    }
else{

    console.log('not found')
}
}

const listNote=()=>{
    const notes = loadNotes()
    notes.forEach((el) => {
        console.log(el.id,el.name,el.degree,el.comment,el.total)
    });
}



module.exports ={
    addNote,
     removeNote,
    readNotes,
    listNote,
    
    
}