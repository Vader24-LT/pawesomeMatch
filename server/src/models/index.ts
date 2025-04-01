import { Sequelize } from 'sequelize';
import { User, UserFactory } from './user';
import Breed from './breed';
import { Favorite, FavoriteFactory } from './favorites';

interface Models {
  User: typeof User;
  Breed: typeof Breed;
  Favorite: typeof Favorite;
  sequelize: Sequelize;
}

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
        },
      }
    );

// Initialize models
const UserModel = UserFactory(sequelize);
const BreedModel = Breed;
const FavoriteModel = FavoriteFactory(sequelize);

// Setup associations
function setupAssociations() {
  // User-Favorite (1:M)
  UserModel.hasMany(FavoriteModel, {
    foreignKey: 'userId',
    as: 'favorites'
  });

  // Breed-Favorite (1:M)
  BreedModel.hasMany(FavoriteModel, {
    foreignKey: 'breedId',  // Changed from dogId to breedId
    as: 'favorites'
  });

  FavoriteModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    as: 'user'
  });

  FavoriteModel.belongsTo(BreedModel, {
    foreignKey: 'breedId',  // Changed from dogId to breedId
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

const models: Models = {
  User: UserModel,
  Breed: BreedModel,
  Favorite: FavoriteModel,
  sequelize
};

export {models,sequelize};