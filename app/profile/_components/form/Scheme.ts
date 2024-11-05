"use client";
import { ZodType, z } from "zod";

export interface ZodTypeProp {
  fullName: string;
  phone: string;
  address: string;
  vkn?: string;
  vergiDairesi?: string;
  firmaAdi?: string;
}

export const UserDataScheme = (): ZodType<ZodTypeProp> => {
  return z.object({
    fullName: z.string().min(3).max(30),
    phone: z.string().min(9).max(30),
    address: z.string().min(20).max(200),
    vkn: z.string().optional(),
    vergiDairesi: z.string().optional(),
    firmaAdi: z.string().optional(),
  });
};
