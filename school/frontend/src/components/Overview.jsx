import { DataCard } from "./DataCard"
import { Button } from "./ui/button"
import { Link } from "react-router-dom";

export default function Overview(){
    return(
    <div className="flex flex-wrap justify-stretch max-w-full items-center">
        <DataCard title={"Total visits:"} data={100} className="m-2" />
        <DataCard title={"Active Visits:"} data={50} className="m-2" />
        <Link to="/addVisitor">
            <Button className="bg-black text-white">Add Visit</Button>
        </Link>
    </div>
    )
}