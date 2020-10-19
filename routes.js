module.exports = (app) => {
    const crud = require("./crud_controller");
    app.route('/api/insert').get(crud.imsertname);
}