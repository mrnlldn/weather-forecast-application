import { z } from 'zod'

export const locationQuerySchema = z.object({
  q: z.string().default(''),
})
export type LocationQuerySchema = z.infer<typeof locationQuerySchema>
