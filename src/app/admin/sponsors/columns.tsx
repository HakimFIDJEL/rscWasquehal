"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type data = {
    id: string
    status: string
    name: string
    logo: string
    website: string
    created_at: string
}

// get a date formated as 2023-07-12 10:42 AM, 12/07/2023 10:42
export function formatDate(date: string) {
    return new Date(date).toLocaleString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

export const columns: ColumnDef<data>[] = [    
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                ID
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell: ({ cell }) => (
            <span>#{cell.getValue<string>()}</span>
        ),
    },
    {
        accessorKey: "logo",
        header: "Logo",
        cell: ({ cell }) => (
            <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src={cell.getValue<string>()}
                width="64"
            />
        ),
    },
    {
        accessorKey: "status",
        header: "Statut",
        cell: ({ cell }) => (
            // if status == 1, say online, else offline
            <Badge variant={cell.getValue<string>() === "1" ? "default" : "secondary"}>
                {cell.getValue<string>() === "1" ? "En ligne" : "Hors ligne"}
            </Badge>
        ),
    },
    {
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "website",
        header: "Site Web",
        cell: ({ cell }) => (
            <a
                className="text-blue-600 hover:underline"
                href={cell.getValue<string>()}
                target="_blank"
                rel="noopener noreferrer"
            >
                {cell.getValue<string>()}
            </a>
        ),
    },
    
    {
        accessorKey: "created_at",
        // sortable
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell: ({ cell }) => (
            <span>{formatDate(cell.getValue<string>())}</span>
        ),
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                    >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <Link href={`/admin/actualites/edit/${row.original.id}`}>
                        <DropdownMenuItem>
                            Modifier
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                        Supprimer
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),

    },
]
