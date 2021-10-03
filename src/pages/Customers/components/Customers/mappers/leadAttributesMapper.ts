import CustomerAttributeLink from '../../../../../../api/customers/models/CustomerAttributeLink'

const joinAttributes = (categories?: CustomerAttributeLink[]): string =>
    categories?.map(x => (x.customerAttributeId ?? '') + (x.value ? ': ' + x.value : '')).join(', ') ?? ''

export { joinAttributes }
