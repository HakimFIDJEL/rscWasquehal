"use client";
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import axios from 'axios';

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

export default function LoginForm() {


  const { toast } = useToast();
  
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
  
    if (!email || !password) {
      console.log('Veuillez remplir tous les champs');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:4000/users/authenticate', { email, password });
      if (response.data.status === 'success') {
        alert('User authenticated successfully');
      } else {
        toast({
          variant: "destructive",
          description: "Identifiants ou mot de passe incorrects",
          duration: 3000  
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Une erreur s'est produite lors de la connexion",
        duration: 3000  
      })
      // Optionally display a toast notification
    }
  };
  

  

  return (

    <>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>
            Connectez-vous en tant qu'administrateur pour accéder à votre tableau de bord.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleFormSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Adresse mail</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Entrez votre adresse mail"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  name="password"
                  placeholder="Entrez votre mot de passe"
                />
              </div>
              <Button type="submit" className="w-full">
              Connexion
              </Button>
              <Link href="/auth/password/forgot" className="ml-auto inline-block text-sm underline">
                Mot de passe oublié ?
              </Link>
            </div>
          </form>
          
        </CardContent>
      </Card>
      <Toaster />
    </>
  )
}
