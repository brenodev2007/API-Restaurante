import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const errorHandling: ErrorRequestHandler = (
  error,
  req,
  res,
  _next
): void => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
  }

  res.status(500).json({ message: error.message });
};
