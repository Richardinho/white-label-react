import Backbone from 'backbone';

export default class Router {

    constructor() {

        this.router = new Backbone.Router();
    }

    registerRoute(route, routeHandler) {

        this.router.route(route, '', routeHandler);
    }

    navigate(path) {

        this.router.navigate(path, {trigger: true});

    }

    update(path) {

        this.router.navigate(path);
    }

}