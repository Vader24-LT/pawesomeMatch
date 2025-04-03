import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import { sequelize } from '../models/index.js';

interface BreedAttributes {
  id: number;
  name: string;
  fun_fact: string | null;
  temperament: string;
  size: string;
  life_span: string;
  hypoallergenic: boolean;
  image_url: string | null;
}

interface BreedCreationAttributes extends Optional<BreedAttributes, 'id'> { }

export class Breed extends Model<BreedAttributes, BreedCreationAttributes>
  implements BreedAttributes {
  public id!: number;
  public name!: string;
  public fun_fact!: string | null;
  public temperament!: string;
  public size!: string;
  public life_span!: string;
  public hypoallergenic!: boolean;
  public image_url!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function BreedFactory(sequelize: Sequelize): typeof Breed {

  Breed.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      fun_fact: {
        type: DataTypes.STRING,
        allowNull: true
      },
      temperament: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hypoallergenic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Breed',
      tableName: 'breeds',
      timestamps: true,
      underscored: true
    }
  );

  return Breed;
};

