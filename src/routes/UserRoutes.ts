import {UserController} from '../controller/UserController';

export const UserRoutes = [
    {
        method: "get",
        route: "/user/:id",
        controller: UserController,
        action: "getUserById"
    },
    {
        method: "post",
        route: "/user",
        controller: UserController,
        action: "newUser"
    },
    {
        method: "put",
        route: "/user/:id",
        controller: UserController,
        action: "updateUser"
    },
    {
        method: "delete",
        route: "/user/:id",
        controller: UserController,
        action: "removeUser"
    }
]