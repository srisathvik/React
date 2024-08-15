export default function Log({totalMoves}){
    return(
        <>
        {console.log(totalMoves)}
        <ol>
            {totalMoves.map((moves, index) => (
                // {console.log(moves)}
                <li key={index}>{`Player ${moves.player} : ${moves.square.row}, ${moves.square.col}`}</li>
            ))}
        </ol>
        </>
    )
}