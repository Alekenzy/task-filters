import data from './apartments.json'
export const APARTMENTS_DATA: Apartment[] = data

export interface BasePageQuery {
  page: number
  size: number
}

export interface BaseFilterQuery {
  address?: string
  minArea?: number
  maxArea?: number
  minRooms?: number
  maxRooms?: number
}

export type GetApartmentsListParams = BasePageQuery & BaseFilterQuery

export interface Apartment {
  id: number
  area: number
  rooms: number
  address: string
  image: string
}

export interface GetApartmentsListResult {
  data: Apartment[]
  totalCount: number
  page: number
  size: number
}
