import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({type, label, pHolder, field}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={type}>{label}</Label>
      <Input type = {type} id={type} placeholder={pHolder} {...field} />
    </div>
  )
}
