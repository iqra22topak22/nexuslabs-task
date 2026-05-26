"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();


  const isDashboardRoute = 
    pathname.startsWith("/dashboard")


  if (isDashboardRoute) return null;

  return <Navbar />;
}