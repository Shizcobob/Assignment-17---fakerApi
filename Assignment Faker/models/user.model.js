const { faker } = require('@faker-js/faker');


module.exports = () => {
    return {
          userId: faker.string.uuid(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          phone: faker.phone.imei(),
          password: faker.internet.password(),
          birthdate: faker.date.birthdate(),
          registeredAt: faker.date.past(),
    };
}





