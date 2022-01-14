import './App.css';
import {useEffect} from 'react'
import Note from './components/Note.js'

function App() {
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  useEffect(() => {
    callBackendAPI()
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  })

  return (
    <div className="App">
      <Note/>
    </div>
  );
}

export default App;
