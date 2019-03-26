const api = "/api/1.0/";

function proxy(app) {
    app.get(`${api}getWebPlugins`, function(req, res) {
        res.json(["/sys.js"]);
    });
}
module.exports = proxy;
