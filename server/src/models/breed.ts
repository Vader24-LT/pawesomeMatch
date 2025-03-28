import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface BreedAttributes {
  name: string;
  fun_fact: string;
  temperament: string;
  size: string;
  life_span: string;
  hypoallergenic: boolean;
  image_url: string;
}

interface BreedCreationAttributes extends Optional<BreedAttributes, `name`> {}

export class Breed extends Model<BreedAttributes, BreedCreationAttributes> 
  implements BreedAttributes {
  public name!: string;
  public fun_fact!: string;
  public temperament!: string;
  public size!: string;
  public life_span!: string;
  public hypoallergenic!: boolean;
  public image_url!: string;

  public getTemperamentList(): string[] {
    return this.temperament.split(',').map(t => t.trim());
  }
}

export function BreedFactory(sequelize: Sequelize): typeof Breed {
  Breed.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      fun_fact: {
        type: DataTypes.STRING,
      },
      temperament: {
        type: DataTypes.TEXT,
      },
      size: {
        type: DataTypes.STRING,
      },
      life_span: {
        type: DataTypes.STRING,
      },
      hypoallergenic: {
        type: DataTypes.BOOLEAN,
      },
      image_url: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'breeds',  
      sequelize,
      timestamps: true
    }
  );

  return Breed;
}