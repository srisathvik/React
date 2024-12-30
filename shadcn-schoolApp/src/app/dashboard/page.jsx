import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { TableDemo } from "@/components/Summary"
export default function Page({entries, endVisit}) {
  const acitveVisits = entries.filter((entry) => entry.outTime === "");
  let tableCaption = "A List of your recent Active Visits"
  return (
    <TableDemo entries={acitveVisits} endVisit={endVisit} caption={tableCaption}/>
  );
}
