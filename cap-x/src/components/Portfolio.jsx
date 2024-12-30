import { Link } from "react-router-dom"
import { TableDemo } from "./StockTable"
import {Overview } from "./Overview"
export function Portfolio(){
    return(
        <div>
            {/* <Link to="./addstock">Add Stock</Link> */}
            <Overview />
            <TableDemo />
        </div>
    )
}