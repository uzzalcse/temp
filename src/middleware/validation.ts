import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateHotel = [
  body('title').notEmpty().trim().isString(),
  body('description').notEmpty().trim().isString(),
  body('guestCount').isInt({ min: 1 }),
  body('bedroomCount').isInt({ min: 1 }),
  body('bathroomCount').isInt({ min: 1 }),
  body('amenities').isArray(),
  body('host.name').notEmpty().trim().isString(),
  body('host.email').isEmail(),
  body('address').notEmpty().trim().isString(),
  body('location.latitude').isFloat(),
  body('location.longitude').isFloat(),
  body('rooms').isArray(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];