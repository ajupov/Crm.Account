import AttributeType from '../../api/products/models/AttributeType'
import { SelectOptionCreateFieldProps } from '../components/Create/Create'

const AttributeTypeWithNames: Dictionary<string> = {
    1: 'Тег',
    2: 'Флаг',
    3: 'Целое число от 0 до 255',
    4: 'Целое число от -32 768 до 32 767',
    5: 'Целое число от 0 до 65 535',
    6: 'Целое число от -2 147 483 648 до 2 147 483 647',
    7: 'Целое число от 0 до 4 294 967 295',
    8: 'Целое число от -9 223 372 036 854 775 808 до 9 223 372 036 854 775 807',
    9: 'Целое число от 0 до 18 446 744 073 709 551 615',
    10: 'Число с плавающей запятой от ±1,0 x 10^-28 до ±7,9228 x 10^28',
    11: 'Число с плавающей запятой от ±1,5 x 10^−45 до ±3,4 x 10^38',
    12: 'Число с плавающей запятой от ±5,0 × 10^−324 до ±1,7 × 10^308',
    20: 'Дата от 01.01.0001 до 31.12.9999',
    21: 'Время от 00:00:00 до 23:59:59',
    22: 'Дата/время от 01.01.0001 00:00:00 до 31.12.9999 23:59:59',
    30: 'Электронная почта',
    31: 'Номер телефона',
    32: 'Адрес',
    33: 'Координаты на карте',
    34: 'Изображение',
    35: 'Документ',
    36: 'Гиперссылка',
    37: 'Ссылка на социальную сеть',
    38: 'Ссылка на изображение',
    39: 'Ссылка на документ',
    40: 'Номер банковского счета',
    60: 'JSON данные',
    61: 'XML данные',
    63: 'HTML данные',
    64: 'Текстовые данные'
}

export function getAttributeTypesAsSelectOptions(): SelectOptionCreateFieldProps[] {
    return Object.entries(AttributeTypeWithNames).map(
        x => ({ value: x[0], text: x[1] } as SelectOptionCreateFieldProps)
    )
}

export function getAttributeTypeName(type?: AttributeType): string {
    return type ? AttributeTypeWithNames[type] : ''
}
