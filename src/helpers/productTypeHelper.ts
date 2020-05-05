import ProductType from '../../api/products/models/ProductType'
import { SelectOptionCreateFieldProps } from '../components/Create/Create'

interface Dictionary {
    [key: number]: string
}

const ProductTypeWithNames: Dictionary = {
    1: 'Материальный',
    2: 'Нематериальный',

}

export const DefaultAttributeType = ProductType.Material

export function getProductTypesAsSelectOptions(): SelectOptionCreateFieldProps[] {
    return Object.entries(ProductTypeWithNames).map(
        x => ({ value: x[0], text: x[1] } as SelectOptionCreateFieldProps)
    )
}

export function getAttributeTypeName(type?: ProductType): string {
    return type ? ProductTypeWithNames[type] : ''
}
