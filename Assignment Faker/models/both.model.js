const { faker } = require('@faker-js/faker');


module.exports = () => {
    return {
        id: faker.string.uuid(),
        companyName: faker.company.name(),
        address: faker.location.streetAddress(),
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        phone: faker.phone.imei(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}



