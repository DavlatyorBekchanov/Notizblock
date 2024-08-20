let notes = ['Banana', 'Rasenmähen'];
let noteTitle = ['Ba', 'Aufgabe'];

let trashNotesTitle = [];
let trashNotes = [];

function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
       
        contentRef.innerHTML += getNoteTemplate(indexNote);
        
    }
}
function renderTrashnotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
       trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote) 
        
    }
}




function getNoteTemplate(indexNote){
    return ` <p>+ title: ${noteTitle[indexNote]} --> ${notes[indexNote]}  <button onclick = "deletNote(${indexNote})">X</button></p> `;
}

function getTrashNoteTemplate(indexTrashNote){
    return ` <p>+ ${trashNotesTitle[indexTrashNote]} <button onclick = "notetotrash(${indexTrashNote})">X</button></p> `;
}


function addNote(){
    let noteInputRef = document.getElementById('note_input');
        let noteInput = noteInputRef.value;
        notes.push(noteInput);
        noteTitle.push("New Title")
        renderNotes()
        noteInputRef.value = "";
}


function notetotrash(indexNote){
    let trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);
        let trashNoteTitle = noteTitle.splice(indexNote, 1)[0];
       trashNotesTitle.push(trashNoteTitle)
    renderNotes();
    renderTrashnotes();
    

}


function deletNote(indexNote){
    let trashNote = notes.splice(indexNote, 1)
    trashNotes.push(trashNote)
    renderNotes();
    renderTrashnotes()
    

}

function deletNote(indexNote) {
    notetotrash(indexNote);  // `deleteNote` endi `notetotrash`ni chaqiradi
}

