export default function Log({totalMoves}){
    return(
        <>
        <ol id='log'>
            {totalMoves.map((moves) => (
                // {console.log(moves)}
                <li key={`${moves.square.row}${moves.square.col}`}>{`${moves.player} selected ${moves.square.row}, ${moves.square.col}`}</li>
            ))}
        </ol>
        </>
    )
}