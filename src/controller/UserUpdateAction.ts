import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

/**
 * Updates given user.
 */
export async function userUpdateAction(request: Request, response: Response) {
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.findOne(request.params.id);
    if (!user) {
        response.status(404);
        response.end();
        return;
    }
    userRepository.merge(user, request.body);
    await userRepository.save(user);
    response.send(user);
}