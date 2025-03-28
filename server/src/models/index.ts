import { Sequelize } from 'sequelize';
import sequelize from '../config/connection.js';
import { User, UserFactory } from './user.js';
import { Breed, BreedFactory } from './breed.js';
import { Favorite, FavoriteFactory } from './favorites.js';

interface Models {
  User: typeof User;
  Breed: typeof Breed;
  Favorite: typeof Favorite;
  sequelize: Sequelize;
}

// Initialize models
const UserModel = UserFactory(sequelize);
const BreedModel = BreedFactory(sequelize);
const FavoriteModel = FavoriteFactory(sequelize);

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

const models: Models = {
  User: UserModel,
  Breed: BreedModel,
  Favorite: FavoriteModel,
  sequelize
};

export default models;