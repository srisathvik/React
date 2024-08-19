import {useState} from 'react';

export default function GameBoard({board, handleActivePlayer}) {

    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function updateGameBoard(rowIndex, colIndex) {
    //     if(gameBoard[rowIndex][colIndex] != null){
    //       return;
    //     }
    //       setGameBoard((prevBoard) => {
    //           const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])]
    //           updatedBoard[rowIndex][colIndex] = isX ? 'X' : 'O';
    //           return updatedBoard;
    //       });
    //       handleActivePlayer(rowIndex, colIndex);
    //   }

    return  <ol id='game-board'>
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
            <ol>
            {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                    <button onClick={()=>handleActivePlayer(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>
            ))}
        </ol>
        </li>
    ))}
    </ol>  
}