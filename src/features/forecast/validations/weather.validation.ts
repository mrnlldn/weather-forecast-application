import { z } from 'zod'

/**
 * Used to validate the url query params for the /weather page
 */
export const weatherQuerySchema = z.object({
  lat: z.string().transform(Number),
  lon: z.string().transform(Number),
})
