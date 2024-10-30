"use client";
import { ZodType, z } from "zod";

export interface ZodTypeProp {
  name: string;
  email: string;
  message: string;
}

export const Schame = (): ZodType<ZodTypeProp> => {
  return z.object({
    name: z.string().min(3).max(30),
    email: z.string().email(),
    message: z.string().min(20).max(200),
  });
};
