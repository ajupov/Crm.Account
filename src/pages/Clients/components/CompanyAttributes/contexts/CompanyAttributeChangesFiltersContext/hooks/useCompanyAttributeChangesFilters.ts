import CompanyAttributeChangesFiltersState, {
    companyAttributeChangesFiltersInitialState
} from '../../../states/CompanyAttributeChangesFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import CompanyAttributeChangesContext from '../../CompanyAttributeChangesContext/CompanyAttributeChangesContext'
import { FilterFormFieldProps } from '../../../../../../../components/common/forms/FilterForm/FilterForm'

// TODO: Move to l10n
const useCompanyAttributeChangesFilters = (): CompanyAttributeChangesFiltersState => {
    const state = useContext(CompanyAttributeChangesContext)
    const [minCreateDate, setMinCreateDate] = useState('')
    const [maxCreateDate, setMaxCreateDate] = useState('')
    const [isApplyEnabled, setIsApplyEnabled] = useState(false)
    const [isResetEnabled, setIsResetEnabled] = useState(false)
    const [isShowMobile, setIsShowMobile] = useState(companyAttributeChangesFiltersInitialState.isShowMobile)

    const onChangeMinCreateDate = useCallback((_, data) => {
        setMinCreateDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxCreateDate = useCallback((_, data) => {
        setMaxCreateDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onApply = useCallback(() => {
        state.setRequest({
            ...state.request,
            minCreateDate,
            maxCreateDate,
            offset: 0
        })

        setIsShowMobile(false)
        setIsApplyEnabled(false)
        setIsResetEnabled(true)
    }, [maxCreateDate, minCreateDate, state])

    const onReset = useCallback(() => {
        setMinCreateDate('')
        setMaxCreateDate('')

        state.setRequest({
            ...state.request,
            minCreateDate: '',
            maxCreateDate: '',
            offset: 0
        })

        setIsShowMobile(false)
        setIsResetEnabled(false)
    }, [state])

    const onShowMobile = useCallback(() => setIsShowMobile(true), [setIsShowMobile])

    const onHideMobile = useCallback(() => setIsShowMobile(false), [setIsShowMobile])

    const fields: FilterFormFieldProps[] = useMemo(
        () => [
            {
                type: 'date',
                topLabel: 'Дата создания',
                value1: minCreateDate,
                onChange1: onChangeMinCreateDate,
                value2: maxCreateDate,
                onChange2: onChangeMaxCreateDate
            }
        ],
        [maxCreateDate, minCreateDate, onChangeMaxCreateDate, onChangeMinCreateDate]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useCompanyAttributeChangesFilters
