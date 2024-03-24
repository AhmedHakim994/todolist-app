import { useState } from 'react';
import './App.css';
import Additems from './components/Additems';
import ListItems from './components/ListItems';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [state, setState] = useState(
    []
  )

  function deleteitem(id) {

    const newlist = [...state]          //copy
    let i = newlist.findIndex(item => item.id === id)
    newlist.splice(i, 1)
    setState(newlist)
  }

  function additem(item) {
    const newstate = [...state]
    newstate.push(item)
    setState(newstate)
  }

  return (
    <div className="App container">
      <h1>to do list</h1>
      <Additems additem={additem} />
      <ListItems listdata={state} deleteitem={deleteitem} />

    </div>
  );
}

export default App;
