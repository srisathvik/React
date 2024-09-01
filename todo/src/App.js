import React, {useState} from 'react'
import Input  from './components/Input';
import Items from './components/Items'
function App() {
  const [list, setList] = useState([]);
  console.log(list);
  function addListItem(text){
    console.log("item added");
    // let prevlist = list;
    // prevlist.push({
    //   title: text,
    //   completed: false,
    // })
    setList([
      ...list,
    {title: text, completed: false}
  ]);
  }
  console.log(typeof list);
  return (
    <div className="App">
      <h1>TODO List</h1>
      <Input handleItem={addListItem}/>
      <Items list={list} />
    </div>
  );
}

export default App;
