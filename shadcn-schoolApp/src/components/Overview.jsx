import { DataCard } from "./DataCard";

export function Overview({details}){
    return(
        <div className="inline-flex justify-between max-w-full">
            <DataCard title={"Total Visits"} data={details.totalVisits} />
            <DataCard title={"Active Visits"} data={details.activeVisits} />
            <DataCard title={"Completed Visits"} data={details.completedVisits} />
        </div>
    )
}