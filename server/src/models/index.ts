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
  // User-Favorite (1:M)
  User.hasMany(Favorite, {
    foreignKey: 'userId',
    as: 'favorites'
  });

  // Breed-Favorite (1:M)
  Breed.hasMany(Favorite, {
    foreignKey: 'breedId', 
    as: 'favorites'
  });

  Favorite.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
  });

  Favorite.belongsTo(Breed, {
    foreignKey: 'breedId',  
    as: 'breed'
  });
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

export {sequelize, User, Breed, Favorite};
