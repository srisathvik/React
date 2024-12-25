import Page from "@/app/dashboard/page" 
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
export default function Home(){
    return(
        // <div>Home</div>
        <>
            <div>
                <Link to="./Summary">Summary</Link>
            </div>
            <div>
                <Link to="./addEntry">Add Entry</Link>
            </div>
            
            <Page />

            {/* <Button Link="/"></Button> */}
            <Button>Add Visit</Button>

        </>  
    )
}