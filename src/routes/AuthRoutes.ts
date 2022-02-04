import { AuthController } from "../controller/AuthController";

export const AuthRoutes = [
    {
        method: "post",
        route: "/auth/login",
        controller: AuthController,
        action: "login"
    },
]