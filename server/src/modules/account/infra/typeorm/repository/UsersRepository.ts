import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repository/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }
    async create({ email, name, password }: ICreateUserDTO): Promise<User> {
        const user =  this.repository.create({
            email, 
            name, 
            password
        })

        await this.repository.save(user);

        return user;
    }
    
}


export { UsersRepository }