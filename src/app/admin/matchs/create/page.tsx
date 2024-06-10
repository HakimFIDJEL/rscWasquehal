import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Upload,
  PlusCircle,
} from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Label } from "@/components/ui/label"




import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"


export const metadata = {
  title: 'RSC Admin - Tableau de bord',
};


export default function Create() {
  



  return (

   


<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

  
    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">

      {/* margin top */}

            <Breadcrumb className="hidden md:flex mt-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/admin">Tableau de bord</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/admin/actualites">Matchs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Créer</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-4">
              <Link href="/admin/actualites">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Retour</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Créer un match
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                {/* <Button variant="outline" size="sm">
                  Annuler
                </Button> */}
                <Button size="sm" className="gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Enregistrer
                  </span>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Détails du match</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Equipe adverse</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Equipe 1</SelectItem>
                            <SelectItem value="dark">Equipe 2</SelectItem>
                            <SelectItem value="system">Equipe 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">

                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="default" size="sm">
                            Ajouter une équipe
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>Ajouter une équipe</SheetTitle>
                            <SheetDescription>
                              Ajouter une équipe à la liste des équipes
                            </SheetDescription>
                          </SheetHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid  gap-4">
                              <Label htmlFor="name">
                                Nom de l'équipe
                              </Label>
                              <Input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid gap-4">
                              <Label htmlFor="username">
                                Logo de l'équipe
                              </Label>
                              <button className="flex py-4 w-full items-center justify-center rounded-md border border-dashed">
                                <Upload className="h-4 w-4 text-muted-foreground" />
                                <span className="sr-only">Upload</span>
                              </button>
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                              <Button type="submit">Ajouter l'équipe</Button>
                            </SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>

                        



                        <Button variant="secondary" size="sm">
                          Supprimer l'équipe sélectionnée
                        </Button>
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Statut de l'actualité</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Select>
                          <SelectTrigger id="status" aria-label="Sélectionner le statut">
                            <SelectValue placeholder="Sélectionner le statut" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">En ligne</SelectItem>
                            <SelectItem value="offline">Hors ligne</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
               
               
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                
                <Card
                  className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Les images de l'actualité</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 gap-2">
                        {/* <button>
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src="/placeholder.svg"
                            width="84"
                          />
                        </button> */}
                        <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Upload</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
              </div>
            </div>
          </div>
        </main>

        


      
  )
}
