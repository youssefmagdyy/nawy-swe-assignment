import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import type { Request, Response, NextFunction } from "express";

type RequestPart = "body" | "query";

export const validateDto = (dtoClass: any, requestPart: RequestPart) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = req[requestPart];
    const dtoObj = plainToInstance(dtoClass, data);
    const errors = await validate(dtoObj, { whitelist: true, forbidNonWhitelisted: true });

    if (errors.length > 0) {
      const formatted = errors.map((err) => ({
        property: err.property,
        constraints: err.constraints,
      }));
      return res.status(400).json({ message: "Validation failed", errors: formatted });
    }

    if(requestPart == 'body')
      (req.body as any) = dtoObj;
    if(requestPart == 'query')
      (req as any).validatedQuery = dtoObj;

    next();
  };
};
