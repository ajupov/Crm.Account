import ProductAttributeLink from '../../../../../../api/products/models/ProductAttributeLink'

const joinAttributes = (categories?: ProductAttributeLink[]): string =>
    categories?.map(x => (x.productAttributeId ?? '') + (x.value ? ': ' + x.value : '')).join(', ') ?? ''

export { joinAttributes }
