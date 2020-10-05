import CompanyAttributeLink from '../../../../../../api/companies/models/CompanyAttributeLink'

const joinAttributes = (categories?: CompanyAttributeLink[]): string =>
    categories?.map(x => (x.companyAttributeId ?? '') + (x.value ? ': ' + x.value : '')).join(', ') ?? ''

export { joinAttributes }
