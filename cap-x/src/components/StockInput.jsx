"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  stockName: z.string().min(2, {
    message: "stockName must be at least 2 characters."
  }),
  ticker: z.string().min(2, {
    message: "ticker must be at least 2 characters."
  }),
  quantity: z.coerce.number().min(1, {message: "The quantity must be atleast 1"}),
  buyingPrice: z.coerce.number().min(1, {message: "The Buying Price must be atleast 1"}),
})


export function StockInput({prev_stock}) {
  // ...
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stockName: prev_stock?.stockName || "",
      ticker: prev_stock?.ticker || "",
      quantity:prev_stock?.quantity || "",
      buyingPrice: prev_stock?.buyingPrice || "",
      
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if(prev_stock){
        //make appi call to edit the stock
    }
    else{
        //make api call to add the stock.
    }
    console.log(values)
    form.reset();
    navigate("../")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="stockName"
          render={({ field }) => (
            <>
                <FormItem>
                    <FormLabel>Stock Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Your buying stock Name" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                        This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                </FormItem>
            </>
            
          )}
        />
        <FormField
          control={form.control}
          name="ticker"
          render={({ field }) => (
            <>
                <FormItem>
                    <FormLabel>Stock Ticker</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Your stock ticker" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                        This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                </FormItem>
            </>
            
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <>
                <FormItem>
                    <FormLabel>Stock quantity</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Your buying stock quantity" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                        This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                </FormItem>
            </>
            
          )}
        />
        <FormField
          control={form.control}
          name="buyingPrice"
          render={({ field }) => (
            <>
                <FormItem>
                    <FormLabel>Buying Price</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Your buying stock Price" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                        This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                </FormItem>
            </>
            
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
