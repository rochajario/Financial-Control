import { IRoute } from "./IRoute";

export class RouteBuilder
{
    private _routes: Array<IRoute> = []
    
    public withControllerRoutes(controller: Array<IRoute>): RouteBuilder
    {
        controller.forEach(route => {
            this._routes.push(route);
        })

        return this;
    }

    public getRouter(): Array<IRoute>
    {
        return this._routes;
    }
}