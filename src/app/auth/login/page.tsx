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

export const metadata = {
  title: 'RSC Wasquehal - Connexion',
};

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Connexion</CardTitle>
        <CardDescription>
          Connectez-vous en tant qu'administrateur pour accéder à votre tableau de bord.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Adresse mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Entrez votre adresse mail"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Mot de passe</Label>
              
            </div>
            <Input id="password" type="password" required />
          </div>
          <Link href="/admin">
            <Button type="button" className="w-full">
            Connexion
            </Button>
          </Link>
          <Link href="/auth/password/forgot" className="ml-auto inline-block text-sm underline">
            Mot de passe oublié ?
          </Link>
        </div>
        
      </CardContent>
    </Card>
  )
}
