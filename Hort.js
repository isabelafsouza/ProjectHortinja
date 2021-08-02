const Database = require('./Database')

class Hort extends Database{
    constructor(params = {}) {
        super()
        this.collection = 'hort'
    }
}

module.exports = Hort