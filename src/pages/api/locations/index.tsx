import { locationQuerySchema } from '@/features/locations/validations/location.validation'
import { OpenWeatherClient } from '@/features/openweather/openweather.client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, {})
  if (!session) {
    res.status(401).end()
    return
  }

  const queryParams = await locationQuerySchema.safeParseAsync(req.query)
  if (queryParams.success === false) {
    res.status(422).end()
    return
  }

  const { q } = queryParams.data
  const client = new OpenWeatherClient(process.env.OPENWEATHER_API_KEY ?? '')
  const locations = await client.geocode({ q, limit: 3 })

  res.json(locations)
}
