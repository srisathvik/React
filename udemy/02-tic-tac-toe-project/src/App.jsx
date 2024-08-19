import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/Winning-combinations";
import  GameOver from './components/GameOver';

const PLAYERS ={
  X: 'Player-1',
  O: 'Player-2'
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActiveplayer(gameTurns) {
  if(gameTurns.length > 0 && gameTurns[0].player == 'X'){
    return 'O';
  }
  return 'X';
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for(const combination of WINNING_COMBINATIONS ){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
    ){
      winner = players[firstSquareSymbol];
    }

  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const isX = deriveActiveplayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  function handleActivePlayer(rowIndex, colIndex){
    setGameTurns((prevTurns)=>{
      const currentPlayer = deriveActiveplayer(prevTurns);
      const updateTurns = [
        {square : {
          row: rowIndex,
          col: colIndex
      }, player: currentPlayer},
      ...prevTurns
    ]
    return updateTurns;  
  })
  }

  function resetGame(){
    console.log("reset");
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    console.log("function triggered");
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol] : newName
      }
    })
  }


  return (
  <main>
    <div id='game-container'>
      <ol id='players' className="highlight-player">
        <Player initialName={PLAYERS.X} symbol='X' isActive={isX === 'X'} onChangeName={handlePlayerNameChange}/>
        <Player initialName={PLAYERS.O} symbol='O' isActive={isX === 'O'} onChangeName={handlePlayerNameChange}/>
      </ol>
      {(winner || gameTurns.length === 9) && <GameOver winner={winner} resetGame={resetGame}/>}
      <GameBoard board={gameBoard} handleActivePlayer = {handleActivePlayer} />
    </div>
    <Log totalMoves={gameTurns} />
  </main>
  )}

export default App
