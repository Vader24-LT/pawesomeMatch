import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface FavoriteAttributes {
  id: number;
  userId: number;
  breedId: number; 
}

interface FavoriteCreationAttributes extends Optional<FavoriteAttributes, 'id'> {}

export class Favorite extends Model<FavoriteAttributes, FavoriteCreationAttributes> 
  implements FavoriteAttributes {
  public id!: number;
  public userId!: number;
  public breedId!: number;  

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function FavoriteFactory(sequelize: Sequelize): typeof Favorite {
  Favorite.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      breedId: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'breeds',  
          key: 'id'
        }
      }
    },
    {
      tableName: 'favorites',
      sequelize,
      timestamps: true
    }
  );

  return Favorite;
}