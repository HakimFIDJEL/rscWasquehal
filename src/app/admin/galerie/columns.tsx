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

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type data = {
    id: string
    title: string
    src: string
    status: string
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
        accessorKey: "src",
        header: "Image",
        cell: ({ cell }) => (
            <Image
                src={cell.getValue<string>()}
                alt="image"
                width={50}
                height={50}
            />
        ),
    },
    {
        accessorKey: "title",
        header: "Titre",
        cell: ({ cell }) => (
            <span>{cell.getValue<string>()}</span>
        ),
    },
    {
        accessorKey: "status",
        header: "Statut",
        cell: ({ cell }) => (
            <Badge>{cell.getValue<string>()}</Badge>
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
            <div className="flex gap-2">
                <Link href={`/admin/galerie/${row.original.id}`}>
                    <span className="cursor-pointer underline">
                        Modifier    
                    </span>
                </Link>
                <AlertDialog>
                    <AlertDialogTrigger>
                        <span className="cursor-pointer underline">
                            Supprimer
                        </span>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Êtes vous sûr ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Vous êtes sur le point de supprimer cet élément. Cette action est irréversible.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction>Oui, supprimer !</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        ),

    },
]
