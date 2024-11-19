import { useParams } from "react-router-dom"
export default function ItemDetail() {
    const id = useParams();
    // console.log(id);
    return <p>This is Item {id.id} Details Page</p>
}