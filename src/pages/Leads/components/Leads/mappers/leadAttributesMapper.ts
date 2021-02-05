import LeadAttributeLink from '../../../../../../api/leads/models/LeadAttributeLink'

const joinAttributes = (categories?: LeadAttributeLink[]): string =>
    categories?.map(x => (x.leadAttributeId ?? '') + (x.value ? ': ' + x.value : '')).join(', ') ?? ''

export { joinAttributes }
