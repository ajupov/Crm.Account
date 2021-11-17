import { DropdownItemProps } from '../../../../components/common/fields/Dropdown/Dropdown'
import SupplierAttributeLink from '../../../../../api/suppliers/models/SupplierAttributeLink'

const joinAttributes = (attributeLinks?: SupplierAttributeLink[], attributesAsOptions?: DropdownItemProps[]): string =>
    attributeLinks
        ?.map(
            x =>
                (attributesAsOptions?.find(a => a.value === x.supplierAttributeId)?.text ?? '') +
                (x.value ? ': ' + x.value : '')
        )
        .join(', ') ?? ''

export { joinAttributes }
