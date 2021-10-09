import { DropdownItemProps } from '../../../../components/common/fields/Dropdown/Dropdown'
import ProductType from '../../../../../api/products/models/ProductType'

// TODO: Move to l10n
const ProductTypeWithNames: { [key in string]: string } = {
    1: 'Товары',
    2: 'Услуги'
}

export function getProductTypesAsSelectOptions(): DropdownItemProps[] {
    return Object.entries(ProductTypeWithNames).map(x => ({ value: x[0], text: x[1] } as DropdownItemProps))
}

export function getProductTypeName(type?: ProductType): string {
    return type ? ProductTypeWithNames[type] : ''
}
