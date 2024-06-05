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
  title: 'Mot de passe oublié',
};

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Mot de passe oublié ?</CardTitle>
        <CardDescription>
            Renseignez votre adresse mail pour recevoir un lien de réinitialisation de votre mot de passe.
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
          <Button type="submit" className="w-full">
            Envoyer le lien
          </Button>
          <Link href="/auth/login">
            <Button type="button" variant="outline" className="w-full">
              Retour à la connexion
            </Button>
          </Link>
          
        </div>
        
      </CardContent>
    </Card>
  )
}
