const Family = require("../../interactions/models/Family");

async function addFamily(samaj_id, family_name, location) {
    return await Family.create({ samaj_id, family_name, location });
}

module.exports = addFamily  