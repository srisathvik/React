"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { InputWithLabel } from "./InputWithLabel"
import { PhoneInput } from "./Phone-input"
// import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Name must be at least 3 characters."
  }),
  mobile: z.string().min(10, {
    message: "Enter a valid mobile number"
  }).max(10, {
    message: "Enter a valid mobile number"
  }),
  reason: z.string().min(3, {
    message: "Reason should be atleast 3 characters long"
  }),
})

export default function ProfileForm({addEntry}) {
  // ...

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      mobile: "",
      reason: "",
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    let id = Date.now().toString(36)
    // console.log(time);
    // console.log(date);
    values = {...values,time, date, isActive: true, id};
    // console.log(values);
    addEntry(values);
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWithLabel type="username" label="Name:  " pHolder="Enter your Name" field={field}/>
              </FormControl>
              <FormMessage />


              {/* <FormLabel>Username:  </FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Name" {...field} />
              </FormControl>
              <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWithLabel type="mobile" label="Mobile:  " pHolder="Enter your Number" field={field}/>
                {/* <PhoneInput /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* <InputWithLabel type="mobile" label="Mobile:  " pHolder="Enter your Number" field={field}/> */}
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Reason for Visit:  </Label>
                  <Textarea placeholder="Type your message here." id="message" {...field}/>
                </div>
                {/* <PhoneInput /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-slate-50 text-black">Submit</Button>
      </form>
    </Form>
  )
}
