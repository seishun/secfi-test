import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

/**
 * Deletes given user.
 */
export async function userDeleteAction(request: Request, response: Response) {
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.findOne(request.params.id);
    if (!user) {
        response.status(404);
        response.end();
        return;
    }    
    await userRepository.remove(user);
    response.end();
}