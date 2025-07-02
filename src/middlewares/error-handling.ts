import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { ZodError } from "zod";

export const errorHandling: ErrorRequestHandler = (
  error,
  req,
  res,
  _next
): void => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    res
      .status(400)
      .json({ message: "Validation Error", issues: error.format() });
  }

  res.status(500).json({ message: error.message });
};
