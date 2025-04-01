import { Request, Response } from 'express';
import Breed from '../models/breed';

export default class BreedController {
  /**
   * Get all breeds (GET /api/breeds)
   */
  static async getAllBreeds(_req: Request, res: Response): Promise<Response> {
    try {
      const breeds = await Breed.findAll();
      return res.json(breeds);
    } catch (error) {
      console.error('Error fetching breeds:', error);
      return res.status(500).json({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Get single breed by ID (GET /api/breeds/:id)
   */
  static async getBreedById(req: Request, res: Response): Promise<Response> {
    try {
      const breed = await Breed.findByPk(req.params.id);
      if (!breed) {
        return res.status(404).json({ error: 'Breed not found' });
      }
      return res.json(breed);
    } catch (error) {
      console.error('Error fetching breed:', error);
      return res.status(500).json({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Create new breed (POST /api/breeds)
   */
  static async createBreed(req: Request, res: Response): Promise<Response> {
    try {
      const breed = await Breed.create(req.body);
      return res.status(201).json(breed);
    } catch (error) {
      console.error('Error creating breed:', error);
      return res.status(400).json({
        error: 'Validation error',
        details: error instanceof Error ? error.message : 'Invalid data'
      });
    }
  }
}