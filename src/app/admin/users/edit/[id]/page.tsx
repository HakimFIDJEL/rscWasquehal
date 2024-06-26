"use client";
import Link from "next/link"
import {
  ChevronLeft,
  PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



import { Label } from "@/components/ui/label"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"

import { Separator } from "@/components/ui/separator"

import React, { useEffect, useRef, useState } from 'react';


import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

import axios from 'axios';

export default function Edit({ params }: {params : { id: number | string }}) 
{


  
  const uploadButtonRef = useRef<HTMLButtonElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const { toast } = useToast();


  const GetUser = () => {
    axios.get(`http://localhost:4000/users/${params.id}`)
    .then((response) => {
      const user = response.data;
      (document.getElementById('name') as HTMLInputElement).value = user.name;
      (document.getElementById('email') as HTMLInputElement).value = user.email;
    })
    .catch((error) => {
      toast({
        variant: 'destructive',
        description: error.response?.data?.message || error.message,
        duration: 3000
      });
    });
  }

  const handlePasswordChange = () => {
    if(passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      passwordConfirmRef.current?.classList.add('border-red-500');
    } else {
      passwordConfirmRef.current?.classList.remove('border-red-500');
    }
  }

  // On récupère les valeurs des champs et on les envoie au serveur
  const handleSave = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;
    
    // Champs non vides
    if(!name || !email) {
      toast({
        variant: "destructive",
        description: "Veuillez remplir tous les champs",
        duration: 3000  
      })
      return;
    }

    // Mot de passe valide
    if(password || passwordConfirm) {

      if(password !== passwordConfirm) {
        passwordConfirmRef.current?.classList.add('border-red-500');
        toast({
          variant: "destructive",
          description: "Les mots de passe ne correspondent pas",
          duration: 3000        
        })
        return;
      }
    }

    // Si le mail est au format valide
    if(!email.includes('@') || !email.includes('.'))
    {
        toast({
          variant: "destructive",
          description: "Veuillez entrer une adresse email valide",
          duration: 3000
        })
        return;
    }


    // use axios to send data to server
    axios.post(`http://localhost:4000/users/${params.id}`, { name, email, password })
    .then((response) => {
        if (response.data.status === 'success') {
            window.location.href = '/admin/users?status=editSuccess';
        } else {
            toast({
                variant: 'destructive',
                description: response.data.message,
                duration: 3000
            });
        }
    })
    .catch((error) => {
        toast({
            variant: 'destructive',
            description: error.response?.data?.message || error.message,
            duration: 3000
        });
    });



    
  }
  

  useEffect(() => {
    GetUser();
  }, []);



  return (

   <>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

  
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
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
                    <Link href="/admin/users">administrateurs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Modifier</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-4">
              <Link href="/admin/users">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Retour</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Modifier un administrateur
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button size="sm" className="gap-1" ref={uploadButtonRef} onClick={handleSave}>
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Enregistrer
                  </span>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Détails de l'utilisateur</CardTitle>
                  </CardHeader>
                    <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6 mt-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" type="text" required placeholder="Ex: John Doe" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Adresse mail</Label>
                        <Input id="email" placeholder="Ex: john@doe.fr" required type="email" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-4">
                  <CardHeader className="pr-12">
                    <CardTitle>Confidentialité</CardTitle>
                    
                    <CardDescription>
                    Le mot de passe est conservé si non modifié.
                    </CardDescription>
                  </CardHeader>
                  <Separator className="mb-8" />
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" type="password" required ref={passwordRef} />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="password">Confirmer le mot de passe</Label>
                        <Input id="password" type="password" required ref={passwordConfirmRef} onChange={handlePasswordChange} />
                      </div>  
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>


        </main>

        <Toaster />
   </>


        


      
  )
}
