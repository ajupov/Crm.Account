import { FilterFormFieldProps } from '../../../../components/common/forms/FilterForm/FilterForm'

export default interface OrderTypesFiltersState {
    fields: FilterFormFieldProps[]
    isApplyEnabled: boolean
    onApply: () => void
    isResetEnabled: boolean
    onReset: () => void
    isShowMobile: boolean
    onShowMobile: () => void
    onHideMobile: () => void
}

export const orderTypesFiltersInitialState: OrderTypesFiltersState = {
    fields: [],
    isApplyEnabled: false,
    onApply: () => void 0,
    isResetEnabled: false,
    onReset: () => void 0,
    isShowMobile: false,
    onShowMobile: () => void 0,
    onHideMobile: () => void 0
}