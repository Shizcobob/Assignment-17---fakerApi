const { faker } = require('@faker-js/faker');


module.exports = () => {
    return {
        id: faker.string.uuid(),
        companyName: faker.company.name(),
        address: faker.location.streetAddress(),
    };
}