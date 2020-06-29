import ProductCategory from '../../../../../../api/products/models/ProductCategory'
import ProductCategoryLink from '../../../../../../api/products/models/ProductCategoryLink'

const joinCategoryIds = (categories?: ProductCategoryLink[]): string =>
    categories?.map(x => x.productCategoryId).join(', ') ?? ''

const joinCategoryNames = (categories?: ProductCategory[]): string => categories?.map(x => x.name).join(', ') ?? ''

export { joinCategoryIds, joinCategoryNames }
