"use client"
// import { Toast } from "@/components/ui/Toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
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
import { PhoneInput } from "@/components/ui/phone-input"
import { Textarea } from "@/components/ui/textarea"
import { myContext } from "@/App"
import { useContext } from "react"

const formSchema = z.object({
  name: z.string().min(2, {message: "Name must be atleast 2 characters"}),
  mobile: z.string().min(13, {message: "Mobile number should be 10 digits"}).max(13, {message: "Mobile number should be 10 digits"}),
  reason: z.string().min(4, {message: "Reason must be atleast 4 characters"})
})

export default function InputForm() {
  const{addVisit} = useContext(myContext);
  const form = useForm({
    resolver: zodResolver(formSchema)
  })

  

  function onSubmit(visit) {

      // console.log(values)
    addVisit(visit);
      
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-7"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" type="text" {...field} />
              </FormControl>
              <FormDescription>Enter Visitor name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
              <FormControl className="w-full">
                <PhoneInput placeholder="" {...field} defaultCountry="IN" />
              </FormControl>
              <FormDescription>Enter your phone number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason</FormLabel>
              <FormControl>
                <Textarea placeholder="" className="resize-none" {...field} />
              </FormControl>
              <FormDescription>Reason for the visit</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-black text-white">Submit</Button>
      </form>
    </Form>
  )
}
