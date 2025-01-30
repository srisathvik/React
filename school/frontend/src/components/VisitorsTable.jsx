import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption,  } from "@/components/ui/table"
import { Button } from "antd";
import { useState } from "react";


export default function visitTable({visits, endVisit}) {
    const [hovered, setHovered] = useState();
    // const{visits, endVisit} = useContext(myContext);
    // let visits=[];
    let setModifyvisit = ()=>{}
    let deletevisit = ()=>{}
    const [searhchableData, setSearchableData] = useState("");
    const [timer, setTimer] = useState(null);
    const [touch, setTouch] = useState(undefined);
    
    // const navigation = useNavigate();

    function handleEdit(visit){
      setModifyvisit(visit);
      navigation("./addvisit");
    }
    function handleDelete(visit){
      const res = deletevisit(visit);
    }

    function handleSearch(data){
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
          }
          setTimer(
            setTimeout(() => {
              setSearchableData(data);
            }, 1000)
          );
    }

    const fiteredvisits = visits.filter((visit)=> visit.name.toLowerCase().includes(searhchableData.toLowerCase()));
    return (
        <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col gap-4 md:gap-6">
            {/* <div className="grid md:grid-cols-[240px_1fr] gap-4 md:gap-6 items-start"> */}
                <div className="flex flex-col gap-4">
                    <form className="grid gap-4">
                    <div className="space-y-2">
                        <Input id="search" placeholder="Search visits..." onChange={(e)=>{handleSearch(e.target.value)}}/>
                    </div>

                    </form>
                </div>
                <div className="grid gap-6 md:gap-8">
                    
                    <Table>
                        {/* <TableCaption>Recent.</TableCaption> */}
                        <TableHeader>
                            <TableRow>
                                <TableHead>Id</TableHead>
                                    <TableHead className="text-center">Name</TableHead>
                                    <TableHead className="text-center">Mobile</TableHead>
                                    <TableHead className="text-center">Entry Time</TableHead>
                                    <TableHead className="text-center">Exit Time</TableHead>
                                    <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {fiteredvisits.map((visit) => (
                                <TableRow key={visit.id} onMouseEnter={e => {
                                setHovered(visit.id);
                            }}
                            onMouseLeave={e => {
                                setHovered(undefined);
                            }}
                            onTouchStart={e=>{
                            setTouch(visit.id);
                            }}
                            onTouchEnd={e=>{
                            setTouch(undefined)
                            }}>
                            
                                    <TableCell className="font-medium">{visit.id}</TableCell>
                                    <TableCell className="text-center">{visit.name}</TableCell>
                                    <TableCell className="text-center">{visit.mobile}</TableCell>
                                    <TableCell className="text-center">{visit.entryTime}</TableCell>
                                    <TableCell className="text-center">{visit.exitTime === null? "Inside" : visit.exitTime}</TableCell>
                                    <TableCell className="text-right">
                                    <div className="flex p-px" style={{visibility: (hovered === visit.id || touch === visit.id) ? "visible" : "hidden"}} >
                                        <p className={`text-red-600 cursor-pointer ${visit.exitTime && "hidden"}`} variant="ghost" onClick={()=>{endVisit(visit)}}>End Visit</p>
                                    </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            {/* </div> */}
        </div>
        </main>
    )
}