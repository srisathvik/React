import Overview from "./Overview";
import VisitorsTable from "./VisitorsTable";
import { myContext } from "@/App";
import { useContext } from "react";

export default function Home(){
    const{visits, endVisit} = useContext(myContext);
    const activeVisits = visits.filter(visit => visit.exitTime === null);

    return(
        <div>
            
            <Overview />
            <div className="grow">
                <VisitorsTable visits={activeVisits} endVisit={endVisit}/> 
            </div>
        </div>
    )
}