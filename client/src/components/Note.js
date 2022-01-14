import TagsList from './TagsList.js'
import {useState} from 'react'

function Note() {
  const [noteData, setNoteData] = useState('');

  function handleChange(event) {
    setNoteData(event.target.value)
  }

  function handleSaveClick() {
    const requestOptions = {
      method: 'POST',
      headers: {
                'Content-Type': 'application/json',
                },
      body: JSON.stringify({noteData})
    };
    fetch('/express_backend_2', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div>
      <p>Note</p>
      <form id='note-data'>
        <textarea
          placeholder='Enter your note'
          autoFocus
          onChange={handleChange}
          value={noteData}
        ></textarea>
      </form>
      <TagsList/>
      <button type='button' onClick={handleSaveClick}>Save note</button>
    </div>
  )
}

export default Note;
