import Breed from "../models/breed.ts";

export const seedBreeds = async () => {
  await Breed.bulkCreate([
    {
      name: "Golden Retriever",
      fun_fact:,
      size: "Large",
      temperament: "Friendly, Intelligent, Devoted",
      lifespan: "10-12 years",
      hypoallergenic:,
      image_url: "https://example.com/golden-retriever.jpg",
    },
    {
      name: "Labrador Retriever",
      size: "Large",
      temperament: "Outgoing, Even Tempered, Gentle",
      lifespan: "10-12 years",
      image_url: "https://example.com/labrador.jpg",
    },
    {
      name: "French Bulldog",
      size: "Small",
      temperament: "Adaptable, Playful, Smart",
      lifespan: "10-14 years",
      image_url: "https://example.com/french-bulldog.jpg",
    },
    {
      name: "German Shepherd",
      size: "Large",
      temperament: "Confident, Courageous, Smart",
      lifespan: "9-13 years",
      image_url: "https://example.com/german-shepherd.jpg",
    },
    {
      name: "Poodle",
      size: "Medium",
      temperament: "Intelligent, Active, Alert",
      lifespan: "12-15 years",
      image_url: "https://example.com/poodle.jpg",
    },
  ]);
};
