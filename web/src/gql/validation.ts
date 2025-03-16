import { z } from 'zod'
import type { CreateExpenseInput, UpdateExpenseInput } from './graphql'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function CreateExpenseInputSchema(): z.ZodObject<Properties<CreateExpenseInput>> {
  return z.object({
    amount: z.number(),
    date: z.date(),
    description: z.string().nullish(),
    title: z.string()
  })
}

export function UpdateExpenseInputSchema(): z.ZodObject<Properties<UpdateExpenseInput>> {
  return z.object({
    amount: z.number().nullish(),
    date: z.date().nullish(),
    description: z.string().nullish(),
    title: z.string().nullish()
  })
}
