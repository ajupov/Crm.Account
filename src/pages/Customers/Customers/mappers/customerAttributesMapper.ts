import CustomerAttributeLink from '../../../../../api/customers/models/CustomerAttributeLink'
import { DropdownItemProps } from '../../../../components/common/fields/Dropdown/Dropdown'

const joinAttributes = (attributeLinks?: CustomerAttributeLink[], attributesAsOptions?: DropdownItemProps[]): string =>
    attributeLinks
        ?.map(
            x =>
                (attributesAsOptions?.find(a => a.value === x.customerAttributeId)?.text ?? '') +
                (x.value ? ': ' + x.value : '')
        )
        .join(', ') ?? ''

export { joinAttributes }
