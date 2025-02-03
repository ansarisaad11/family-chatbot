const Samaj = require("../../interactions/models/Samaj");

async function createSamaj(name) {
    return await Samaj.create({ name });
}

module.exports = createSamaj;