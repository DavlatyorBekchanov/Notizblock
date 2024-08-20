let notes = ['Banana', 'Rasenmähen'];

let trashNotes = [];

function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
       
        contentRef.innerHTML += getTrashNoteTemplate(indexNote);
        
    }
}
function renderTrashnotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; trashNotes < trashNotes.length; indexTrashNote++) {
       trashContentRef.innerHTML += getNoteTemplate(indexTrashNote) 
        
    }
}




function getNoteTemplate(indexNote){
    return ` <p>+ ${notes[indexNote]} <button onclick = "deletNote(${indexNote})">X</button></p> `;
}

function getTrashNoteTemplate(indexTrashNote){
    return ` <p>+ ${trashNotes[indexTrashNote]} <button onclick = "deletNote(${indexTrashNote})">X</button></p> `;
}


function addNote(){
    let noteInputRef = document.getElementById('note_input');
        let noteInput = noteInputRef.value;
        notes.push(noteInput);
        renderNotes()
        noteInputRef.value = "";
}

function deletNote(indexNote){
    let trashNote = notes.splice(indexNote, 1)
    trashNotes.push(trashNote)
    renderNotes();
    renderTrashnotes()

}