import { DropdownItemProps } from '../../../../components/common/fields/Dropdown/Dropdown'
import ProductAttributeLink from '../../../../../api/products/models/ProductAttributeLink'

const joinAttributes = (attributeLinks?: ProductAttributeLink[], attributesAsOptions?: DropdownItemProps[]): string =>
    attributeLinks
        ?.map(
            x =>
                (attributesAsOptions?.find(a => a.value === x.productAttributeId)?.text ?? '') +
                (x.value ? ': ' + x.value : '')
        )
        .join(', ') ?? ''

export { joinAttributes }
