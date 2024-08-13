import {useState} from 'react';
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
export default function GameBoard({isX, handleActivePlayer}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function updateGameBoard(rowIndex, colIndex) {
        if(gameBoard[rowIndex][colIndex] != null){
          return;
        }
          setGameBoard((prevBoard) => {
              const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])]
              updatedBoard[rowIndex][colIndex] = isX ? 'X' : 'O';
              return updatedBoard;
          });
          handleActivePlayer();
      }

    return  <ol id='game-board'>
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
            <ol>
            {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                    <button onClick={()=>updateGameBoard(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
            ))}
        </ol>
        </li>
    ))}
    </ol>  
}