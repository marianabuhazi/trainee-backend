const data = require('../data');

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    hello_name: (req, res) => {
        res.json({"message": `Hello ${req.params.name}!`});
    },
    sources: (req, res) => {
        res.json({"message": "OK", data: data.sources});
        console.log("IT WORKS!");
    },
    add_source: (req, res) => {
        data.sources.push(req.body.source);

        res.json({"message": "OK", data: data.sources});
    },
    delete_source: (req, res) => {
        data.sources = data.sources.filter(source => parseInt(req.params.num) !== source.num);

        console.log(req.params.num);
        console.log(data.sources);

        res.json({"message": "OK", data: data.sources});
    }
};