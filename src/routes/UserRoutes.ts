import {Router} from "express";
import { AuthController } from "../controller/AuthController";
import { UserController } from "../controller/UserController";

export class UserRoutes {
    public router: Router;
    public userController: UserController = new UserController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.post('/', this.userController.save);
        this.router.get('/', this.authController.authorize, this.userController.one);
        this.router.put('/', this.authController.authorize, this.userController.update);
        this.router.delete('/', this.authController.authorize, this.userController.delete);
    }
}