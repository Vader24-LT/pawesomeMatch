import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { BreedFactory } from './breed.js';
import { FavoriteFactory } from './favorites.js';


// Initialize models
const User = UserFactory(sequelize);
const Breed = BreedFactory(sequelize);
const Favorite = FavoriteFactory(sequelize);

// Setup associations
function setupAssociations() {
// After initializing all models
User.hasMany(Favorite, { foreignKey: 'userId' });
Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(Breed, { foreignKey: 'breedId' });
Breed.hasMany(Favorite, { foreignKey: 'breedId' });
}

setupAssociations();

// Test connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

testConnection();



export{User, sequelize, Favorite, Breed}