import {userGetAllAction} from "./controller/UserGetAllAction";
import {userGetByIdAction} from "./controller/UserGetByIdAction";
import {userSaveAction} from "./controller/UserSaveAction";
import {userUpdateAction} from "./controller/UserUpdateAction";
import {userDeleteAction} from "./controller/UserDeleteAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: userGetAllAction
    },
    {
        path: "/users/:id",
        method: "get",
        action: userGetByIdAction
    },
    {
        path: "/users",
        method: "post",
        action: userSaveAction
    },
    {
        path: "/users/:id",
        method: "put",
        action: userUpdateAction
    },
    {
        path: "/users/:id",
        method: "delete",
        action: userDeleteAction
    }
];