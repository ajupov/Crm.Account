import { DropdownItemProps } from '../../../../components/common/fields/Dropdown/Dropdown'
import OrderAttributeLink from '../../../../../api/orders/models/OrderAttributeLink'

const joinAttributes = (attributeLinks?: OrderAttributeLink[], attributesAsOptions?: DropdownItemProps[]): string =>
    attributeLinks
        ?.map(
            x =>
                (attributesAsOptions?.find(a => a.value === x.orderAttributeId)?.text ?? '') +
                (x.value ? ': ' + x.value : '')
        )
        .join(', ') ?? ''

export { joinAttributes }
