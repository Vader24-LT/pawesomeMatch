import dotenv from 'dotenv';
dotenv.config();

console.log('test: ',process.env.DB_USER);


import { Sequelize } from 'sequelize';
console.log('this is the password',process.env.DB_PASSWORD)
console.log('this should be the whole', process.env)
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
          ssl: { // Required for Render
            require: true,
            rejectUnauthorized: false
          }
        },
      }
    );

export default sequelize;
