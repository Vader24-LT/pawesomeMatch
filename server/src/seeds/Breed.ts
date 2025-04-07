import {Breed} from "../models/breed.js";

export const seedBreeds = async () => {
  await Breed.bulkCreate([
    {
      name: "Golden Retriever",
      fun_fact:"",
      size: "Large",
      temperament: "Friendly, Intelligent, Devoted",
      life_span: "10-12 years",
      hypoallergenic:false,
      image_url: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
    },
    {
      name: "Labrador Retriever",
      fun_fact:"",
      size: "Large",
      temperament: "Outgoing, Even Tempered, Gentle",
      life_span: "10-12 years",
      hypoallergenic:false,
      image_url: "https://consumer-cms.petfinder.com/sites/default/files/images/content/Labrador%20Retriever%20%202_0.jpg/labrador.jpg",
    },
    {
      name: "French Bulldog",
      size: "Small",
      fun_fact:"",
      temperament: "Adaptable, Playful, Smart",
      life_span: "10-14 years",
      hypoallergenic:false,
      image_url: "https://image.petmd.com/files/styles/978x550/public/2022-10/french-bulldog.jpeg",
    },
    {
      name: "German Shepherd",
      size: "Large",
      fun_fact:"",
      temperament: "Confident, Courageous, Smart",
      life_span: "9-13 years",
      hypoallergenic:false,
      image_url: "https://www.bellaandduke.com/wp-content/uploads/2024/10/A-guide-to-German-Shepherds-characteristics-personality-lifespan-and-more-featured-image.webp",
    },
    {
      name: "Poodle",
      size: "Medium",
      fun_fact:"",
      temperament: "Intelligent, Active, Alert",
      life_span: "12-15 years",
      hypoallergenic:true,
      image_url: "https://cdn.britannica.com/39/233239-050-50C0C3C5/standard-poodle-dog.jpg?w=300",
    },
  ]);
};
