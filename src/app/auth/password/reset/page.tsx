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
  title: 'Réinitialisation du mot de passe',
};

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Réinitialisez votre mot de passe</CardTitle>
        <CardDescription>
          Vous avez oublié votre mot de passe ? Pas de panique, renseignez votre nouveau mot de passe pour le réinitialiser.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Renseignez votre nouveau mot de passe</Label>
              
            </div>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Confirmez votre nouveau mot de passe</Label>
              
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Réinitialiser
          </Button>
        </div>
        
      </CardContent>
    </Card>
  )
}
