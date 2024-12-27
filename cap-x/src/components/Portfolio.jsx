import { Link } from "react-router-dom"
import { TableDemo } from "./StockTable"
export function Portfolio(){
    return(
        <div>
            <Link to="./addstock">Add Stock</Link>
            <TableDemo />
        </div>
    )
}