import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [isX, setIsX] = useState(true);
  const [gameTurns, setGameTurns] = useState([]);
  function handleActivePlayer(rowIndex, colIndex){
    setIsX(!isX);
    setGameTurns((prevTurns)=>{
      let currentPlayer = 'X';
      if((prevTurns.length > 0) && (prevTurns[0].player === 'X')){
        currentPlayer = 'O'
      }
      const updateTurns = [
        {square : {
          row: rowIndex,
          col: colIndex
      }, player: isX ? 'X' : 'O'},
      ...prevTurns
    ]
    return updateTurns;  
  })
  }


  return <main>
    <div id='game-container'>
      <ol id='players' className="highlight-player">
        <Player initialName='Player-1' symbol='X' isActive={isX}/>
        <Player initialName='Player-2' symbol='O' isActive={!isX}/>
      </ol>
      <GameBoard isX={isX} handleActivePlayer = {handleActivePlayer} />
    </div>
    <Log totalMoves={gameTurns} />
  </main>
}

export default App
