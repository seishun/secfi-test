import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

/**
 * Loads user by a given id.
 */
export async function userGetByIdAction(request: Request, response: Response) {
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.findOne(request.params.id);
    if (!user) {
        response.status(404);
        response.end();
        return;
    }
    response.send(user);
}
