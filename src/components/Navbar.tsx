"use client";

import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-20 inset-x-0 max-w-3xl mx-auto z-50", className)}
    >
         <Menu setActive={setActive} >
            <Link href={"/"} className="hover:underline">
              <MenuItem setActive={setActive} active={active} item="Home">
                
              </MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Skills">
                <div className="flex flex-col space-y-4 text-md">
                    <HoveredLink href="/frontend">FrontEnd</HoveredLink>
                    <HoveredLink href="/Backend">Backend</HoveredLink>
                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                    <HoveredLink href="/Interface">Interface Design</HoveredLink>
                    <HoveredLink href="/VersionControl">Version Control</HoveredLink>
                 </div>
              </MenuItem>
 
              <Link href={"/contact"} className=" hover:underline">
                <MenuItem setActive={setActive} active={active} item="contact Us">

                </MenuItem>
              </Link>
                
              <Link href={"/Projects"} className="hover:underline">
                <MenuItem setActive={setActive} active={active} item="Projects">
                  
                </MenuItem>
              </Link>
         </Menu>
    </div>
  )
}

export default Navbar
