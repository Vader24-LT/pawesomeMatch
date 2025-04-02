import {Breed} from "../models/breed";


export const seedBreeds = async () => {
  await Breed.bulkCreate([
    {
      name: "Golden Retriever",
      fun_fact:"",
      size: "Large",
      temperament: "Friendly, Intelligent, Devoted",
      life_span: "10-12 years",
      hypoallergenic:false,
      image_url: "https://example.com/golden-retriever.jpg",
    },
    {
      name: "Labrador Retriever",
      fun_fact:"",
      size: "Large",
      temperament: "Outgoing, Even Tempered, Gentle",
      life_span: "10-12 years",
      hypoallergenic:false,
      image_url: "https://example.com/labrador.jpg",
    },
    {
      name: "French Bulldog",
      size: "Small",
      fun_fact:"",
      temperament: "Adaptable, Playful, Smart",
      life_span: "10-14 years",
      hypoallergenic:false,
      image_url: "https://example.com/french-bulldog.jpg",
    },
    {
      name: "German Shepherd",
      size: "Large",
      fun_fact:"",
      temperament: "Confident, Courageous, Smart",
      life_span: "9-13 years",
      hypoallergenic:false,
      image_url: "https://example.com/german-shepherd.jpg",
    },
    {
      name: "Poodle",
      size: "Medium",
      fun_fact:"",
      temperament: "Intelligent, Active, Alert",
      life_span: "12-15 years",
      hypoallergenic:true,
      image_url: "https://example.com/poodle.jpg",
    },
  ]);
};
