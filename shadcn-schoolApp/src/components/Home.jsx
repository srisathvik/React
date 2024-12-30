import Page from "@/app/dashboard/page" 
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { CardDemo } from "./Details"
export default function Home({entries, endVisit}){
    // console.log(data);
    
    return(
        // <div>Home</div>
        <>
            <div>
                <Link to="./Summary">Summary</Link>
            </div>
            <div>
                <Link to="./addEntry">Add Entry</Link>
            </div>
            <CardDemo />
            <Page entries={entries} endVisit={endVisit} />

            {/* <Button Link="/"></Button> */}
            {/* <Button>Add Visit</Button> */}

        </>  
    )
}