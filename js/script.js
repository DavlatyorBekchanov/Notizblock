let notes = ['Banana', 'Rasenmähen'];


function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNoteTemplate(note);
        
    }
}

function getNoteTemplate(note){
    return ` <p>+ ${note}</p>`;
}

function addNote(){
    let noteInputRef = document.getElementById('note_input');
        let noteInput = noteInputRef.value;
        notes.push(noteInput);
        renderNotes()
        noteInputRef.value = "";
}