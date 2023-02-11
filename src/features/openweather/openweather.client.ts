import axios, { AxiosInstance } from 'axios'
import { z } from 'zod'

type ForecastProps = {
  /**
   * Latitude of the target location
   */
  lat: number
  /**
   * Longitude of the target location
   */
  lon: number
  /**
   * Number of days to return
   */
  cnt?: number
}
const forecastSchema = z.object({
  city: z.object({
    name: z.string(),
    country: z.string(),
  }),
  list: z.array(
    z.object({
      dt: z.number().int(),
      temp: z.object({
        max: z.number(),
      }),
      pressure: z.number(),
      humidity: z.number(),
      weather: z.array(
        z.object({
          main: z.string(),
          description: z.string(),
        }),
      ),
    }),
  ),
})

type GeocodeProps = {
  /**
   * Search parameter for determining which places to return
   */
  q: number
  /**
   * How many search results to return
   */
  limit?: number
}
const geocodeSchema = z.array(
  z.object({
    name: z.string(),
    lat: z.number(),
    lon: z.number(),
  }),
)

/**
 * A mini client library that interacts with the openweather API. Guarantees type safety
 * through zod.
 *
 * Should be used only on server side to protect the API Key from being exposed to the public.
 */
export class OpenWeatherClient {
  private apiKey: string
  private _instance: AxiosInstance

  constructor(apiKey: string) {
    this.apiKey = apiKey
    this._instance = axios.create({
      baseURL: 'https://api.openweather.org',
    })
  }

  /**
   * Returns the weather forecast for a given location (lat, long)
   */
  async forecast({ lat, lon, cnt = 10 }: ForecastProps) {
    const response = await this._instance.get('/data/2.5/forecast/daily', {
      params: {
        lat,
        lon,
        cnt,
        APPID: this.apiKey,
      },
    })

    const parsedResponse = await forecastSchema.safeParseAsync(response.data)
    if (parsedResponse.success === false) {
      return null
    }

    return parsedResponse.data
  }

  /**
   * Returns the possible places with lat, long data given a search parameter q
   */
  async geocode({ q, limit = 3 }: GeocodeProps) {
    const response = await this._instance.get('/geo/1.0/direct', {
      params: {
        q,
        limit,
        APPID: this.apiKey,
      },
    })

    const parsedResponse = await geocodeSchema.safeParseAsync(response.data)
    if (parsedResponse.success === false) {
      return []
    }
    return parsedResponse.data
  }
}
