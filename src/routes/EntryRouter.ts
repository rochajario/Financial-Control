import { Router } from "express";
import { AuthController } from "../controller/AuthController";
import { EntryController } from "../controller/EntryController";

class EntryRouter {
    private _router: Router = Router();
    private entryController: EntryController = new EntryController();
    private authController: AuthController = new AuthController();

    public routes() {
        return [
            this.getAll(),
            this.getId(),
            this.getPayments(),
            this.getReceivings(),
            this.postSave(),
            this.putId(),
            this.deleteId()
        ]
    }

    private getAll() {
        return this.router.get('/', this.authController.authorize, this.entryController.all);
    }

    private getId() {
        return this.router.get('/:id', this.authController.authorize, this.entryController.one);
    }

    private getReceivings() {
        return this.router.get('/receivings', this.authController.authorize, this.entryController.receivings);
    }

    private getPayments() {
        return this.router.get('/payments', this.authController.authorize, this.entryController.payments);
    }

    private postSave() {
        return this.router.post('/', this.authController.authorize, this.entryController.save);
    }

    private putId() {
        return this.router.put('/:id', this.authController.authorize, this.entryController.update);
    }

    private deleteId() {
        return this.router.delete('/:id', this.authController.authorize, this.entryController.delete);
    }

    private get router() {
        return this._router;
    }
}

export default new EntryRouter()