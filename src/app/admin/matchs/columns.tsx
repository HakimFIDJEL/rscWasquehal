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
    opponent: string
    category: string
    score1: number
    score2: number
    location: string
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
        accessorKey: "opponent",
        header: "Adversaire",
    },
    {
        accessorKey: "status",
        header: "Statut",
        cell: ({ cell }) => (
            // place a badge with a success, danger or warning color depending on the results, calculated from the score
            <Badge
                variant={cell.row.original.score1 > cell.row.original.score2 ? "default" : cell.row.original.score1 < cell.row.original.score2 ? "destructive" : "secondary"}
            >
                {cell.row.original.score1 > cell.row.original.score2 ? "Victoire" : cell.row.original.score1 < cell.row.original.score2 ? "Défaite" : "Match nul"}
            </Badge>
            
        ),
    },
    {
        accessorKey: "category",
        header: "Catégorie",
    },
    {
        accessorKey: "score",
        header: "Score",
        cell: ({ cell }) => (
            // according to the location, if it's "Domicile" or "Extérieur", we display the score in the right order
            <span>
                {cell.row.original.location === "Domicile" ? `${cell.row.original.score1} - ${cell.row.original.score2}` : `${cell.row.original.score2} - ${cell.row.original.score1}`}
            </span>
        ),
    },
    {
        accessorKey: "location",
        header: "Lieu",
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
