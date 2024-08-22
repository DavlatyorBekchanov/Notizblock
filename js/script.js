let notes = ['Banana', 'Rasenmähen'];
let noteTitle = ['Ba', 'Aufgabe'];

let trashNotesTitle = [];
let trashNotes = [];

function init(){
    getFromLocalStorage();
renderTrashnotes();
renderTrashnotes();


}

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

function saveToLocalStorage(){
    localStorage.setItem('notes', JSON.stringify(notes));
     localStorage.setItem('noteTitle', JSON.stringify(noteTitle));
     localStorage.setItem('trashNotesTitle', JSON.stringify(trashNotesTitle));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));

}





function getFromLocalStorage() {
   let storedData = localStorage.getItem('notes', JSON.parse(storedData));
       let storedTitles = localStorage.getItem('noteTitle', JSON.parse(storedTitles));
   let storedTrashnotes = localStorage.getItem('trashNotesTitle', JSON.parse(storedTrashnotes));
   let storedTrashTitles = localStorage.getItem('trashNotes', JSON.parse(storedTrashTitles));

        notes = storedData // Saqlangan JSON formatidagi ma'lumotni qayta massivga aylantirish
    noteTitle = storedTitles
        trashNotesTitle = storedTrashnotes
        trashNotes = storedTrashTitles
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
        saveToLocalStorage()
}


function notetotrash(indexNote){
    let trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);
        let trashNoteTitle = noteTitle.splice(indexNote, 1)[0];
       trashNotesTitle.push(trashNoteTitle)
    renderNotes();
    renderTrashnotes();
    saveToLocalStorage()

}


function deletNote(indexNote){
    let trashNote = notes.splice(indexNote, 1)
    trashNotes.push(trashNote)
    renderNotes();
    renderTrashnotes()
    saveToLocalStorage()

}

function deletNote(indexNote) {
    notetotrash(indexNote);  // `deleteNote` endi `notetotrash`ni chaqiradi
}

