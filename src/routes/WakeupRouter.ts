import { Router, NextFunction, Request, Response } from 'express';

class WakeupRouter {
    private _router: Router;

    public routes() {
        return [
            this.postWakeup()
        ]
    }

    private postWakeup() {
        return this.router.post('/', this.wakeup);
    }

    private async wakeup(request: Request, response: Response, next: NextFunction) {
        response.status(204).send();
    }

    private get router() {
        return this._router
    }
}

export default new WakeupRouter()