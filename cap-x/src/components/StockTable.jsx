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
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';

  const invoices = [
    {
      stockName: "State Bank Of India",
      ticker: "SBI",
      buyingPrice: 250,
      currentPrice: 300,
      quantity: 1,
    },
    {
        stockName: "TATA STEEL LIMITED",
        ticker: "TSL",
        buyingPrice: 300,
        currentPrice: 444,
        quantity: 1,
    },
    {
        stockName: "HERITAGE",
        ticker: "HT",
        buyingPrice: 250,
        currentPrice: 200,
        quantity: 1,
    },
    {
        stockName: "MOTHERSON",
        ticker: "MTS",
        buyingPrice: 250,
        currentPrice: 550,
        quantity: 1,
    },
    {
        stockName: "GOOGLE",
        ticker: "GL",
        buyingPrice: 550,
        currentPrice: 570,
        quantity: 1,
    },
    {
        stockName: "NVIDIA",
        ticker: "NVD",
        buyingPrice: 700,
        currentPrice: 720,
        quantity: 1,
    },
    {
        stockName: "MICROSOFT LIMITED",
        ticker: "MSL",
        buyingPrice: 450,
        currentPrice: 444,
        quantity: 1,
    },
  ]
  
  export function TableDemo() {
    function handleEdit(stock){
      console.log(stock);
    }
    function handleDelete(stock){
      console.log(stock);
    }
    return (
      <Table>
        <TableCaption>A list of your recent Stocks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Stock</TableHead>
            <TableHead>Ticker</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Invested Amount</TableHead>
            <TableHead>Cuurent Amount</TableHead>
            <TableHead className="text-right">P&L</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.stockName}</TableCell>
              <TableCell className="font-medium">{invoice.ticker}</TableCell>
              <TableCell className="text-center">{invoice.quantity}</TableCell>
              <TableCell className="text-center">{invoice.quantity * invoice.buyingPrice}</TableCell>
              <TableCell className="text-center">{invoice.quantity * invoice.currentPrice}</TableCell>
              <TableCell className="text-right">{(invoice.quantity * invoice.currentPrice) - (invoice.quantity * invoice.buyingPrice)}</TableCell>
              <TableCell className="text-right">
                <div className="flex p-px">
                    <Button className="w-10 h-10" onClick={() =>{handleEdit(invoice)}}><Pencil /></Button>
                    <Button className="space-x-1.5 bg-red-700 w-10 h-10" onClick={()=>{handleDelete(invoice)}}><Trash2 /></Button>
                </div>
              </TableCell>
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
  