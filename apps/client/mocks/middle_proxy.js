const api = "/api/1.0/";

function proxy(app) {
    app.get(`${api}getWebPlugins`, function (req, res) {
        res.json(["/sys.js"]);
    });
    app.get(`${api}diagrams/:usr/:name`, function (req, res) {
        res.json({
            id: "6e331720-5aa0-11e9-9a27-2da3002e1880",
            name: "test",
            path: "/diagrams/frank/test",
            nodes: [{
                id: "id6e3317205aa011e99a272da3002e1880",
                name: "connector 1",
                width: 240,
                height: 120,
                offsetY: 120,
                offsetX: 240,
                shape: {type: "HTML", content: `<div data-id='id6e3317205aa011e99a272da3002e1880' class="cardInstanceWrapper"/>`},
                data: {
                    cardInfoName: "PostgreSQL连接"
                }
            }],
            connectors: []
        });
    });
    app.get(`${api}diagrams/:usr/`, function (req, res) {
        res.json([{
            id: "6e331720-5aa0-11e9-9a27-2da3002e1880",
            name: "test"
        }]);
    });
}

module.exports = proxy;
