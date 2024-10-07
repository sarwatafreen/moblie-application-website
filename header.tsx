
import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header>
           
           <div className="flex justify-between font-semibold bg-red-500 gap-x-4 mx-10 text-4xl text-red-900">
            <h1>MY MOBILE</h1>
           
          
             
           <nav className="flex justify-center gap-x-4 mx-9 text-4xl text-red-900 ">
            <ul className=" flex justify-center gap-x-4 text -4xl">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact ">Contact </Link></li>
              
            </ul>
           </nav>
           </div>

           </header>
           );
           };