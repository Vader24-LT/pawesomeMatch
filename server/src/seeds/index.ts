
import { seedUsers } from './user.js';
import { seedBreeds } from "./Breed";
import sequelize from '../config/connection.js';


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