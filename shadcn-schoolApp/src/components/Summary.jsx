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
  
  export function TableDemo({entries, endVisit}) {
    console.log(entries);
    return (
      <Table>
        <TableCaption>A list of your recent Entries.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead >Entry Time</TableHead>
            {/* <TableHead >Status</TableHead> */}
            <TableHead >Exit Time</TableHead>
            <TableHead >End Visit</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell className="font-medium">{entry.id}</TableCell>
              <TableCell className="font-medium">{entry.username}</TableCell>
              <TableCell>{entry.reason}</TableCell>
              <TableCell>{entry.inTime}</TableCell>
              <TableCell >{entry.exitTime? entry.exitTime :"Inside"}</TableCell>
              <TableCell ><Button className="bg-red-600" disabled={entry.exitTime === ""} onClick={()=>{endVisit(entry.id)}}>End Visit</Button></TableCell>
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
  
  