import axios, { AxiosInstance } from 'axios'
import { z } from 'zod'

type WeatherProps = {
  /**
   * Latitude of the target location
   */
  lat: number
  /**
   * Longitude of the target location
   */
  lon: number
}
const weatherSchema = z.object({
  id: z.number(),
  dt: z.number(),
  name: z.string(),
  main: z.object({
    temp: z.number(),
    pressure: z.number(),
    humidity: z.number(),
  }),
  weather: z.array(
    z.object({
      main: z.string(),
      description: z.string(),
    }),
  ),
})
export type WeatherSchema = z.infer<typeof weatherSchema>

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
      baseURL: 'https://api.openweathermap.org/',
    })
  }

  /**
   * Returns the weather forecast for a given location (lat, long).
   *
   * This API only returns the current weather forecast because the 16 days forecast
   * is unfortunately not open to free plans
   *
   * @link https://openweathermap.org/faq#error401
   */
  async weather({ lat, lon }: WeatherProps) {
    const response = await this._instance.get('/data/2.5/weather', {
      params: {
        lat,
        lon,
        APPID: this.apiKey,
      },
    })

    const parsedResponse = await weatherSchema.safeParseAsync(response.data)
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
