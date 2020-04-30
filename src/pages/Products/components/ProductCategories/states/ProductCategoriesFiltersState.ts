import { FilterFieldProps } from '../../../../../components/Filter/Filter'

export default interface ProductCategoriesFiltersState {
    fields: FilterFieldProps[]
    isApplyEnabled: boolean
    onApply: () => void
    isResetEnabled: boolean
    onReset: () => void
}

export const productCategoriesFiltersInitialState: ProductCategoriesFiltersState = {
    fields: [],
    isApplyEnabled: false,
    onApply: () => void 0,
    isResetEnabled: false,
    onReset: () => void 0
}
