import { DataCard } from "./DataCard";

export function Overview(){
    return(
        <div className="inline-flex justify-between max-w-full">
            <DataCard title={"Invested"} data={"amount"} />
            <DataCard title={"Current"} data={"amount"} />
            <DataCard title={"P&L"} data={"amount"} />
        </div>
    )
}