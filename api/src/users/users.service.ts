import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    // get all users
    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    // get one user
    async findOne(id: number): Promise<User> {
        return this.usersRepository.findOne({ where: { id } });
    }

    // create one user
    async create(user: User): Promise<{ status: string, message: string }> 
    {
        try {
          user.created_at = new Date();
          user.password = await bcrypt.hash(user.password, 10);
          
            //   Si les champs ne sont pas vides
            if(!user.name || !user.email || !user.password)
            {
                return { status: 'error', message: "Veuillez remplir tous les champs" };
            }

            // Si le mail est au format valide
            if(!user.email.includes('@') || !user.email.includes('.'))
            {
                return { status: 'error', message: "Veuillez entrer une adresse email valide" };
            }

            //   On vérifie que le mail n'est pas déjà utilisé
            const mailExisting = await this.usersRepository.findOne({ where: { email: user.email } });
            if (mailExisting) {
                return { status: 'error', message: "Cette adresse email est déjà utilisée" };
            }
            
          await this.usersRepository.save(user);
          return { status: 'success', message: "L'utilisateur a été créé avec succès" };
        } 
        catch (error) 
        {
          return { status: 'error', message: error.message };
        }
    }

    // update one user
    async update(id: number, user: User): Promise<{ status: string, message: string }>  
    {
        try {
          // Si les champs ne sont pas vides
          if (!user.name || !user.email) {
            return { status: 'error', message: "Veuillez remplir tous les champs" };
          }
    
          // Si le mail est au format valide
          if (!user.email.includes('@') || !user.email.includes('.')) {
            return { status: 'error', message: "Veuillez entrer une adresse email valide" };
          }

        //   On vérifie que le mail n'est pas déjà utilisé
        const mailExisting = await this.usersRepository.findOne({ where: { email: user.email } });
        if (mailExisting && mailExisting.id !== id) {
            return { status: 'error', message: "Cette adresse email est déjà utilisée" };
        }
    
          // Lire l'utilisateur existant depuis la base de données
          const existingUser = await this.usersRepository.findOne({ where: { id } });
    
          if (!existingUser) {
            return { status: 'error', message: "Utilisateur non trouvé" };
          }
    
          // Si le mot de passe est renseigné, le hacher et le mettre à jour
          if (user.password && user.password !== '') {
            user.password = await bcrypt.hash(user.password, 10);
          } else {
            // Sinon, conserver le mot de passe existant
            user.password = existingUser.password;
          }
    
          // Mettre à jour les autres champs
          await this.usersRepository.update(id, user);
    
          return { status: 'success', message: "L'utilisateur a été mis à jour avec succès" };
        } catch (error) {
          return { status: 'error', message: error.message };
        }
    }
    

    // remove one user
    async remove(id: number): Promise<{ status: string, message: string }>  {
        try {
          await this.usersRepository.delete(id);
          return { status: 'success', message: "L'utilisateur a été supprimé avec succès" };
        } 
        catch (error) 
        {
          return { status: 'error', message: error.message };
        }
    }

    // authenticate
    async authenticate(email: string, password: string): Promise<{ status: string, message: string }> {
      const user = await this.usersRepository.findOne({ where: { email } });
      if (!user) {
        return { status: 'error', message: 'Utilisateur non trouvé' };
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return { status: 'error', message: 'Mot de passe incorrect' };
      }
  
      return { status: 'success', message: "L'utilisateur a été authentifié avec succès" };
    }
}
