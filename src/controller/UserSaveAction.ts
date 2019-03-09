import {Request, Response} from "express";
import {getManager} from "typeorm";
import {hash} from "argon2";
import {User} from "../entity/User";

/**
 * Saves given user.
 */
export async function userSaveAction(request: Request, response: Response) {
    const userRepository = getManager().getRepository(User);
    const newUsers = userRepository.create(request.body);
    for (const newUser of newUsers) {
        newUser.password = await hash(newUser.password);
    }
    await userRepository.save(newUsers);
    response.send(newUsers);
}