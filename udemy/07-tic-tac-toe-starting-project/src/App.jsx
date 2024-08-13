import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react";

function App() {
  const [isX, setIsX] = useState(true);
 
  function handleActivePlayer(){
    setIsX(!isX);
  }

    


  return <main>
    <div id='game-container'>
      <ol id='players' className="highlight-player">
        <Player initialName='Player-1' symbol='X' isActive={isX}/>
        <Player initialName='Player-2' symbol='O' isActive={!isX}/>
      </ol>
      <GameBoard isX={isX} handleActivePlayer = {handleActivePlayer}/>
    </div>
  </main>
}

export default App
