import { DataCard } from "./DataCard";
import { myContext } from "@/App";
import { useContext } from "react";


export function Overview(){
    const {overViewData} = useContext(myContext);
    return(
        <div className="inline-flex justify-between max-w-full">
            <DataCard title={"Invested"} data={overViewData? overViewData.initialPrice : "..."} />
            <DataCard title={"Current"} data={overViewData? overViewData.currentPrice : "..."} />
            <DataCard title={"P&L"} data={overViewData? overViewData.pAndL : "..."} />
        </div>
    )
}