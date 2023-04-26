import { NextFunction, Request, Response } from 'express';

const requestRequiredFields = {
  car: ['model', 'year', 'color', 'buyValue', 'doorsQty', 'seatsQty'],
  motorcycle: ['model', 'year', 'color', 'buyValue', 'category', 'engineCapacity'],
};

const validateRequiredFields = (key: keyof typeof requestRequiredFields) =>
  (req:Request, res:Response, next:NextFunction): Response | void => {
    const requiredFields = requestRequiredFields[key];
    for (let index = 0; index < requiredFields.length; index += 1) {
      if (!req.body[requiredFields[index]]) {
        return res.status(400).json({ 
          message: `The field '${requiredFields[index]}' is required`, 
        });
      }
    }
    return next();
  };

export default validateRequiredFields;
