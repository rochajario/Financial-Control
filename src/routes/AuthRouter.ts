import { Router } from "express";
import { AuthController } from "../controller/AuthController";

export class AuthRouter {
    private _router: Router = Router();
    private authController = new AuthController();

    public routes() {
        return [
            this.postLogin()
        ]
    }

    private postLogin() {
        return this.router.post('/login', this.authController.login);
    }

    private get router() {
        return this._router
    }
}

export default new AuthRouter()