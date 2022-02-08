import express = require('express');

declare const expressAsyncWrapper = (fn: any) => (req: Request, res: Response, next: NextFunction, ...args: any[]) => fn(req, res, next, ...args)
  .catch((error: any) => next(error));

declare namespace expressAsyncWrapper {}

export = expressAsyncWrapper;
