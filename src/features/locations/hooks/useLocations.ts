import { type LocationQuerySchema } from '@/features/locations/validations/location.validation'
import { type GeocodeSchema } from '@/features/openweather/openweather.client'
import axiosInstance from '@/utils/axios'
import { useQuery } from 'react-query'

export function useLocations(params: LocationQuerySchema) {
  return useQuery(['locations', params.q], {
    queryFn: async () => {
      const response = await axiosInstance.get<GeocodeSchema>(
        '/api/locations',
        {
          params,
        },
      )

      if (response.status !== 200) {
        return []
      }

      return response.data
    },
  })
}
