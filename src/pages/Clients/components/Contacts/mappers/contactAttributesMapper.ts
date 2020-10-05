import ContactAttributeLink from '../../../../../../api/contacts/models/ContactAttributeLink'

const joinAttributes = (categories?: ContactAttributeLink[]): string =>
    categories?.map(x => (x.contactAttributeId ?? '') + (x.value ? ': ' + x.value : '')).join(', ') ?? ''

export { joinAttributes }
