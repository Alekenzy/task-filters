import type {
  Apartment,
  GetApartmentsListParams,
  GetApartmentsListResult,
} from '#shared/config/apartments.ts'
import { APARTMENTS_DATA } from '#shared/config/apartments.ts'

export async function getApartmentsList(
  params: GetApartmentsListParams,
): Promise<GetApartmentsListResult> {
  const { page = 1, size = 10, address = '', minArea, maxArea, minRooms, maxRooms } = params

  await new Promise((resolve) => setTimeout(resolve, 300))

  if (page < 1 || size < 1) {
    throw new Error('Некорректные параметры пагинации')
  }

  let result = APARTMENTS_DATA

  if (address) {
    const lowerAddr = address.toLowerCase()
    result = result.filter((apt) => apt.address.toLowerCase().includes(lowerAddr))
  }
  if (minArea != null) {
    result = result.filter((apt) => apt.area >= minArea)
  }
  if (maxArea != null) {
    result = result.filter((apt) => apt.area <= maxArea)
  }
  if (minRooms != null) {
    result = result.filter((apt) => apt.rooms >= minRooms)
  }
  if (maxRooms != null) {
    result = result.filter((apt) => apt.rooms <= maxRooms)
  }

  const totalCount = result.length

  const startIndex = (page - 1) * size
  const endIndex = startIndex + size
  const paginated = result.slice(startIndex, endIndex)

  return {
    data: paginated,
    totalCount,
    page,
    size,
  }
}

export async function getApartmentById(id: number): Promise<Apartment> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  if (!id || id <= 0) {
    throw new Error('Некорректный ID')
  }

  const found = APARTMENTS_DATA.find((apt) => apt.id === id)
  if (!found) {
    throw new Error(`Квартира с ID ${id} не найдена`)
  }

  return found
}
