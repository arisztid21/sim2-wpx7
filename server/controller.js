module.exports={
    getHouses: (req, res, next) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).send(houses)
        })
    },
    postProperty: (req, res, next) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip} = req.body
        db.post_property([name, address, city, state, zip])
        .then(newHouse => res.status(200).send(newHouse))
    },
    deleteProperty: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_property([id])
        .then(houses => res.status(200).send(houses))
    }
}