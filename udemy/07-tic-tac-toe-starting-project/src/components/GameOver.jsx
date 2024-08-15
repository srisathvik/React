export default function GameOver({winner, resetGame}) {
    return(
        <div id="game-over">
            <h1>Game Over</h1>
            { winner && <p>{winner} Won</p> }
            {!winner && <p>Game Drawn</p>}
            <p>
                <button onClick={resetGame}>Rematch!</button>
            </p>
        </div>
    )
}