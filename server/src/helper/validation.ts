import { Response, Request, NextFunction } from 'express';

function IsValidId(req: Request, _res: Response, next: NextFunction) {
  const { id } = req.params;

  if (isNaN(+id)) throw new Error('id not number');
  if (+id <= 0) throw new Error(' id <= 0');
  next();
}



export = { IsValidId };