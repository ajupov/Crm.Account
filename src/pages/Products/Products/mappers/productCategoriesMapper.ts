import { DropdownItemProps } from '../../../../components/common/fields/Dropdown/Dropdown'
import ProductCategory from '../../../../../api/products/models/ProductCategory'
import ProductCategoryLink from '../../../../../api/products/models/ProductCategoryLink'

const joinCategoryIds = (categories?: ProductCategoryLink[], categoriesAsOptions?: DropdownItemProps[]): string =>
    categories?.map(x => categoriesAsOptions?.find(a => a.value === x.productCategoryId)?.text ?? '').join(', ') ?? ''

const joinCategoryNames = (categories?: ProductCategory[]): string => categories?.map(x => x.name).join(', ') ?? ''

export { joinCategoryIds, joinCategoryNames }
