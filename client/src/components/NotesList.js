

function NoteList(props) {
  let notesArray;
  if(props.notesArray.length !== 0) {
    notesList = props.notesArray.map((elem) => {
      return (<div key=elem.id>{elem.text}</div>)
    });
  }
  return (
    <div>
      <button type='button'>+</button>
      {notesList}
    </div>
  )
}

export default NoteList;
