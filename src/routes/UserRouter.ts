import { Router } from "express";
import { AuthController } from "../controller/AuthController";
import { UserController } from "../controller/UserController";

export class UserRouter {
    private _router: Router = Router();
    private userController: UserController = new UserController();
    private authController: AuthController = new AuthController();

    public routes() {
        return [
            this.getOne(),
            this.postSave(),
            this.putUpdate(),
            this.delete()
        ]
    }

    private getOne() {
        return this.router.get('/', this.authController.authorize, this.userController.one);
    }

    private postSave() {
        return this.router.post('/', this.userController.save);
    }

    private putUpdate() {
        return this.router.put('/', this.authController.authorize, this.userController.update);
    }

    private delete() {
        return this.router.delete('/', this.authController.authorize, this.userController.delete);
    }

    private get router() {
        return this._router
    }
}

export default new UserRouter()