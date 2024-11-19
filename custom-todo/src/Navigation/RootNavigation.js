import { Link } from "react-router-dom"
export default function RootNavigation() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="../items">TODOS</Link>
        </div>
        // <h1>This is root navigation</h1>
    )
}