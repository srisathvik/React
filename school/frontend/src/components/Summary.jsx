import { useContext } from "react"
import { myContext } from "@/App"
import VisitTable from "./VisitorsTable"
export default function Summary(){
    const{visits, endVisit} = useContext(myContext);

    return(
        // <h1>Summary page</h1>
        <VisitTable visits={visits} endVisit={endVisit} />
    )
};