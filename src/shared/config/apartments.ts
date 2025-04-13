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

export const APARTMENTS_DATA: Apartment[] = [
  { id: 1, area: 45, rooms: 1, address: 'Астана, ул. Абая, 10', image: '/images/apt5.jpg' },
  { id: 2, area: 50, rooms: 1, address: 'Астана, ул. Сейфуллина, 5', image: '/images/apt5.jpg' },
  {
    id: 3,
    area: 80,
    rooms: 2,
    address: 'Астана, пр. Кабанбай батыра, 15',
    image: '/images/apt5.jpg',
  },
  { id: 4, area: 60, rooms: 2, address: 'Астана, ул. Пушкина, 20', image: '/images/apt5.jpg' },
  { id: 5, area: 75, rooms: 2, address: 'Астана, ул. Кунаева, 8', image: '/images/apt5.jpg' },
  { id: 6, area: 90, rooms: 3, address: 'Астана, пр. Тәуелсіздік, 30', image: '/images/apt5.jpg' },
  {
    id: 7,
    area: 110,
    rooms: 3,
    address: 'Астана, ул. Байтурсынова, 12',
    image: '/images/apt5.jpg',
  },
  { id: 8, area: 120, rooms: 4, address: 'Астана, пр. Республики, 45', image: '/images/apt5.jpg' },
  { id: 9, area: 100, rooms: 3, address: 'Астана, ул. Достык, 17', image: '/images/apt5.jpg' },
  { id: 10, area: 130, rooms: 4, address: 'Астана, ул. Сарыарқа, 33', image: '/images/apt5.jpg' },
  { id: 11, area: 140, rooms: 4, address: 'Астана, ул. Валиханова, 6', image: '/images/apt5.jpg' },
  {
    id: 12,
    area: 55,
    rooms: 2,
    address: 'Астана, ул. Жансугурова, 11',
    image: '/images/apt5.jpg',
  },
  { id: 13, area: 35, rooms: 1, address: 'Астана, ул. Бейбитшилик, 22', image: '' },
  { id: 14, area: 160, rooms: 5, address: 'Астана, ул. Отырар, 9', image: '' },
  { id: 15, area: 85, rooms: 3, address: 'Астана, пр. Назарбаева, 50', image: '' },

  { id: 16, area: 95, rooms: 3, address: 'Астана, пр. Есенберлина, 12', image: '' },
  { id: 17, area: 91, rooms: 4, address: 'Астана, ул. Есиль, 7', image: '' },
  { id: 18, area: 37, rooms: 2, address: 'Астана, ул. Алматы, 25', image: '' },
  { id: 19, area: 135, rooms: 4, address: 'Астана, ул. Алматы, 20', image: '' },
  { id: 20, area: 138, rooms: 4, address: 'Астана, ул. Бараева, 13', image: '' },
  { id: 21, area: 73, rooms: 3, address: 'Астана, ул. Достык, 27', image: '' },
  { id: 22, area: 142, rooms: 5, address: 'Астана, ул. Достык, 15', image: '' },
  { id: 23, area: 138, rooms: 4, address: 'Астана, пр. Байтик батыра, 36', image: '' },
  { id: 24, area: 42, rooms: 4, address: 'Астана, ул. Кенесары, 4', image: '' },
  { id: 25, area: 130, rooms: 3, address: 'Астана, ул. Абылай хана, 37', image: '' },
  { id: 26, area: 132, rooms: 1, address: 'Астана, ул. Байтик батыра, 15', image: '' },
  { id: 27, area: 71, rooms: 5, address: 'Астана, ул. Мангилик Ел, 24', image: '' },
  { id: 28, area: 177, rooms: 2, address: 'Астана, ул. Казыбек би, 9', image: '' },
  { id: 29, area: 126, rooms: 4, address: 'Астана, ул. Байзакова, 4', image: '' },
  { id: 30, area: 84, rooms: 3, address: 'Астана, пр. Сарыкол, 4', image: '' },
  { id: 31, area: 122, rooms: 2, address: 'Астана, ул. Акан Серы, 30', image: '' },
  { id: 32, area: 100, rooms: 5, address: 'Астана, пр. Есиль, 28', image: '' },
  { id: 33, area: 109, rooms: 5, address: 'Астана, ул. Есенберлина, 11', image: '' },
  { id: 34, area: 83, rooms: 5, address: 'Астана, ул. Казыбек би, 14', image: '' },
  { id: 35, area: 57, rooms: 2, address: 'Астана, пр. Мангилик Ел, 22', image: '' },
  { id: 36, area: 169, rooms: 5, address: 'Астана, пр. Байзакова, 32', image: '' },
  { id: 37, area: 30, rooms: 1, address: 'Астана, пр. Момышулы, 17', image: '' },
  { id: 38, area: 97, rooms: 1, address: 'Астана, пр. Кенесары, 35', image: '' },
  { id: 39, area: 146, rooms: 5, address: 'Астана, ул. Есенберлина, 12', image: '' },
  { id: 40, area: 184, rooms: 1, address: 'Астана, пр. Мангилик Ел, 40', image: '' },
  { id: 41, area: 118, rooms: 3, address: 'Астана, ул. Алматы, 33', image: '' },
  { id: 42, area: 139, rooms: 2, address: 'Астана, пр. Абылай хана, 35', image: '' },
  { id: 43, area: 82, rooms: 1, address: 'Астана, пр. Момышулы, 13', image: '' },
  { id: 44, area: 62, rooms: 3, address: 'Астана, ул. Момышулы, 14', image: '' },
  { id: 45, area: 67, rooms: 4, address: 'Астана, ул. Байтик батыра, 45', image: '' },
  { id: 46, area: 31, rooms: 4, address: 'Астана, пр. Мангилик Ел, 16', image: '' },
  { id: 47, area: 35, rooms: 3, address: 'Астана, пр. Момышулы, 10', image: '' },
  { id: 48, area: 102, rooms: 5, address: 'Астана, пр. Мангилик Ел, 14', image: '' },
  { id: 49, area: 102, rooms: 5, address: 'Астана, ул. Туран, 50', image: '' },
  { id: 50, area: 174, rooms: 4, address: 'Астана, ул. Мангилик Ел, 33', image: '' },
  { id: 51, area: 135, rooms: 4, address: 'Астана, ул. Алматы, 44', image: '' },
  { id: 52, area: 38, rooms: 2, address: 'Астана, пр. Достык, 12', image: '' },
  { id: 53, area: 130, rooms: 5, address: 'Астана, пр. Казыбек би, 6', image: '' },
  { id: 54, area: 51, rooms: 2, address: 'Астана, ул. Алматы, 26', image: '' },
  { id: 55, area: 137, rooms: 5, address: 'Астана, ул. Момышулы, 49', image: '' },
  { id: 56, area: 183, rooms: 1, address: 'Астана, ул. Момышулы, 11', image: '' },
  { id: 57, area: 69, rooms: 5, address: 'Астана, ул. Момышулы, 19', image: '' },
  { id: 58, area: 48, rooms: 1, address: 'Астана, пр. Алматы, 39', image: '' },
  { id: 59, area: 166, rooms: 1, address: 'Астана, ул. Момышулы, 7', image: '' },
  { id: 60, area: 172, rooms: 3, address: 'Астана, ул. Кенесары, 30', image: '' },
  { id: 61, area: 37, rooms: 3, address: 'Астана, ул. Байтик батыра, 23', image: '' },
  { id: 62, area: 199, rooms: 1, address: 'Астана, пр. Мангилик Ел, 41', image: '' },
  { id: 63, area: 60, rooms: 3, address: 'Астана, ул. Мангилик Ел, 37', image: '' },
  { id: 64, area: 48, rooms: 1, address: 'Астана, ул. Достык, 23', image: '' },
  { id: 65, area: 188, rooms: 2, address: 'Астана, ул. Бараева, 31', image: '' },
  { id: 66, area: 101, rooms: 1, address: 'Астана, пр. Есиль, 33', image: '' },
  { id: 67, area: 46, rooms: 4, address: 'Астана, пр. Достык, 31', image: '' },
  { id: 68, area: 192, rooms: 3, address: 'Астана, ул. Абылай хана, 49', image: '' },
  { id: 69, area: 37, rooms: 1, address: 'Астана, ул. Байтик батыра, 14', image: '' },
  { id: 70, area: 116, rooms: 5, address: 'Астана, ул. Акан Серы, 48', image: '' },
  { id: 71, area: 82, rooms: 5, address: 'Астана, ул. Казыбек би, 16', image: '' },
  { id: 72, area: 94, rooms: 4, address: 'Астана, пр. Туран, 50', image: '' },
  { id: 73, area: 93, rooms: 3, address: 'Астана, пр. Алматы, 14', image: '' },
  { id: 74, area: 57, rooms: 5, address: 'Астана, ул. Есиль, 7', image: '' },
  { id: 75, area: 70, rooms: 1, address: 'Астана, пр. Акан Серы, 37', image: '' },
  { id: 76, area: 156, rooms: 4, address: 'Астана, пр. Абылай хана, 19', image: '' },
  { id: 77, area: 157, rooms: 3, address: 'Астана, ул. Достык, 28', image: '' },
  { id: 78, area: 176, rooms: 1, address: 'Астана, ул. Байтик батыра, 1', image: '' },
  { id: 79, area: 164, rooms: 2, address: 'Астана, ул. Сарыкол, 24', image: '' },
  { id: 80, area: 165, rooms: 4, address: 'Астана, ул. Кенесары, 9', image: '' },
  { id: 81, area: 61, rooms: 5, address: 'Астана, ул. Туран, 27', image: '' },
  { id: 82, area: 146, rooms: 4, address: 'Астана, пр. Алматы, 48', image: '' },
  { id: 83, area: 30, rooms: 1, address: 'Астана, ул. Акан Серы, 13', image: '' },
  { id: 84, area: 101, rooms: 3, address: 'Астана, ул. Мангилик Ел, 23', image: '' },
  { id: 85, area: 186, rooms: 4, address: 'Астана, ул. Есиль, 33', image: '' },
]
