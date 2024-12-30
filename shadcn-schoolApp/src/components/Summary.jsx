import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button"
import { useState } from "react";
//   const entries = [
//     {
//         date: "12/23/2024",
//         id: "m4zz2os7",
//         inTime: "12:29:27 AM",
//         isActive: true,
//         mobile: "5555555555",
//         reason: "aasdf",
//         username: "zxvc"
//     },
//     {
//         date: "12/23/2024",
//         id: "m4zz2os7",
//         inTime: "12:29:27 AM",
//         isActive: true,
//         mobile: "5555555555",
//         reason: "aasdf",
//         username: "asdf"
//     },
//     {
//         date: "12/23/2024",
//         id: "m4zz2os7",
//         inTime: "12:29:27 AM",
//         isActive: true,
//         mobile: "5555555555",
//         reason: "aasdf",
//         username: "qewr"
//     },
//   ]
//   const invoices = [
//     {
//       invoice: "INV001",
//       paymentStatus: "Paid",
//       totalAmount: "$250.00",
//       paymentMethod: "Credit Card",
//     },
//     {
//       invoice: "INV002",
//       paymentStatus: "Pending",
//       totalAmount: "$150.00",
//       paymentMethod: "PayPal",
//     },
//     {
//       invoice: "INV003",
//       paymentStatus: "Unpaid",
//       totalAmount: "$350.00",
//       paymentMethod: "Bank Transfer",
//     },
//     {
//       invoice: "INV004",
//       paymentStatus: "Paid",
//       totalAmount: "$450.00",
//       paymentMethod: "Credit Card",
//     },
//     {
//       invoice: "INV005",
//       paymentStatus: "Paid",
//       totalAmount: "$550.00",
//       paymentMethod: "PayPal",
//     },
//     {
//       invoice: "INV006",
//       paymentStatus: "Pending",
//       totalAmount: "$200.00",
//       paymentMethod: "Bank Transfer",
//     },
//     {
//       invoice: "INV007",
//       paymentStatus: "Unpaid",
//       totalAmount: "$300.00",
//       paymentMethod: "Credit Card",
//     },
//   ]
  
  export function TableDemo({entries, endVisit, caption}) {
    // console.log(entries);
    const[hovered, setHovered] = useState(undefined);
    return (
      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Reason</TableHead>
            <TableHead className="text-center">Entry Time</TableHead>
            {/* <TableHead >Status</TableHead> */}
            <TableHead className="text-center">Exit Time</TableHead>
            <TableHead ></TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id} onMouseEnter={e => {
              setHovered(entry.id);
          }}
          onMouseLeave={e => {
              setHovered(undefined);
          }}>
              <TableCell className="font-medium text-center">{entry.id}</TableCell>
              <TableCell className="font-medium text-center">{entry.username}</TableCell>
              <TableCell className="text-center">{entry.reason}</TableCell>
              <TableCell className="text-center">{entry.inTime}</TableCell>
              <TableCell className="text-center">{entry.outTime? entry.outTime :"Inside"}</TableCell>
              <TableCell className="text-center"><Button style={{visibility: hovered === entry.id ? "visible" : "hidden"}} disabled={entry.outTime !== ""} onClick={()=>{endVisit(entry.id)}}>End Visit</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  
