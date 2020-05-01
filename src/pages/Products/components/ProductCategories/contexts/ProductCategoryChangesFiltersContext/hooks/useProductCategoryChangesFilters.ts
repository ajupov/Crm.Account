import ProductCategoryChangesFiltersState, {
    productCategoryChangesFiltersInitialState
} from '../../../states/ProductCategoryChangesFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFieldProps } from '../../../../../../../components/Filter/Filter'
import { InputOnChangeData } from 'semantic-ui-react'
import ProductCategoryChangesContext from '../../ProductCategoryChangesContext/ProductCategoryChangesContext'

const useProductCategoryChangesFilters = (): ProductCategoryChangesFiltersState => {
    const state = useContext(ProductCategoryChangesContext)
    const [minCreateDate, setMinCreateDate] = useState('')
    const [maxCreateDate, setMaxCreateDate] = useState('')
    const [isApplyEnabled, setIsApplyEnabled] = useState(false)
    const [isResetEnabled, setIsResetEnabled] = useState(false)
    const [isShowMobile, setIsShowMobile] = useState(productCategoryChangesFiltersInitialState.isShowMobile)

    const onChangeMinCreateDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMinCreateDate(data.value)
            setIsApplyEnabled(true)
        },
        [setMinCreateDate]
    )

    const onChangeMaxCreateDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMaxCreateDate(data.value)
            setIsApplyEnabled(true)
        },
        [setMaxCreateDate]
    )

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

    const fields: FilterFieldProps[] = useMemo(
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

export default useProductCategoryChangesFilters
