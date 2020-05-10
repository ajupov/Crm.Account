import ProductType from '../../api/products/models/ProductType'
import { SelectOptionCreateFieldProps } from '../components/Create/Create'

const ProductTypeWithNames: Dictionary<string> = {
    1: 'Товары',
    2: 'Услуги'
}

export function getProductTypesAsSelectOptions(): SelectOptionCreateFieldProps[] {
    return Object.entries(ProductTypeWithNames).map(
        x => ({ value: x[0], text: x[1] } as SelectOptionCreateFieldProps)
    )
}

export function getAttributeTypeName(type?: ProductType): string {
    return type ? ProductTypeWithNames[type] : ''
}
