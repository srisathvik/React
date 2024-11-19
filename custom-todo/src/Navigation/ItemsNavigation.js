import { Link } from "react-router-dom"
export default function ItemsNavigation() {
    return(
        <div>
            <Link to="/items">All TODOS</Link>
            <Link to="/items/new">New TODO</Link>
        </div>
        
    )
}