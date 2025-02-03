const Member = require("../../interactions/models/member");

async function addMember(family_id, name, gender, age, blood_group, mobile1, mobile2) {
    return await Member.create({ family_id, name, gender, age, blood_group, mobile1, mobile2 });
}

module.exports = addMember