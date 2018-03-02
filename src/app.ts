const express = require('express');
const path = require('path');

// Controllers (route handlers)
const homeController = require("./controllers/homeController");
const statsController = require("./controllers/statsController");

class App {
    express: any;

    constructor() {
        this.express = express();

        this.express.set("port", process.env.PORT || 3000);
        this.express.use(express.static(path.join(__dirname, 'views')));
        //this.express.set("views", path.join(__dirname, "../views"));
        //app.set("view engine", "pug");

        /**
         * Primary app routes.
         */
        this.express.get("/", homeController.index);
        this.express.get("/stats", statsController.index);
        this.express.get("/stats/get", statsController.get);
    }
}

export default new App().express;