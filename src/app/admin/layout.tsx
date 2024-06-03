import type { Metadata } from "next";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import $ from "jquery";

// Styles
import "@/styles/admin/css/style.min.css";

// Scripts
// import "../scripts/script.js";
// import "../scripts/elements/scroll.js";

// Components


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  console.log(children);

  return (
    <html lang="en">
      <head>
        
      </head>

      <body className="">
        {children}
      </body>
    </html>
  );
}
