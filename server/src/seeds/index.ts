import { seedUsers } from "./user";
import { seedBreeds } from "./breed";
import sequelize from "../config/connection";

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Drops and recreates tables
    console.log("Database synced!");

    await seedUsers();
    console.log("Users seeded!");

    await seedBreeds();
    console.log("Breeds seeded!");

    console.log("✅ Seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();


// import { seedUsers } from './user-seeds.js';
// import sequelize from '../config/connection.js';

// const seedAll = async (): Promise<void> => {
//   try {
//     await sequelize.sync({ force: true });
//     console.log('\n----- DATABASE SYNCED -----\n');
    
//     await seedUsers();
//     console.log('\n----- USERS SEEDED -----\n');
    
//     process.exit(0);
//   } catch (error) {
//     console.error('Error seeding database:', error);
//     process.exit(1);
//   }
// };

// seedAll();
