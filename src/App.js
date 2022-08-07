import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [veri, setVeri] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")  //api yi nereden cekeceksek url buraya.
        // .then(res => console.log(res.data[0].title))
        .then(res => setVeri(res.data[id].body))
        // .catch(err => console.log(err))
  }, [veri, id])

  return (
    <div className="App">
     <h1> {veri} </h1>
     <p>
      <input type="text"value={id} onChange={e => setId(e.target.value)}/>
     </p>
    </div>
  );
}

export default App;
