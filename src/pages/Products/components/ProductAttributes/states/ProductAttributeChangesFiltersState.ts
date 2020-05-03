import { FilterFieldProps } from '../../../../../components/Filter/Filter'

export default interface ProductAttributeChangesFiltersState {
    fields: FilterFieldProps[]
    isApplyEnabled: boolean
    onApply: () => void
    isResetEnabled: boolean
    onReset: () => void
    isShowMobile: boolean
    onShowMobile: () => void
    onHideMobile: () => void
}

export const productAttributeChangesFiltersInitialState: ProductAttributeChangesFiltersState = {
    fields: [],
    isApplyEnabled: false,
    onApply: () => void 0,
    isResetEnabled: false,
    onReset: () => void 0,
    isShowMobile: false,
    onShowMobile: () => void 0,
    onHideMobile: () => void 0
}
