import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFieldProps } from '../../../../../../../../../components/Filter/Filter'
import { InputOnChangeData } from 'semantic-ui-react'
import ProductCategoryChangesContext from '../../../../../contexts/ProductCategoryChangesContext/ProductCategoryChangesContext'

interface UseProductCategoriesFiltersReturn {
    fields: FilterFieldProps[]
    isApplyEnabled: boolean
    onApply: () => void
    isResetEnabled: boolean
    onReset: () => void
}

const useProductCategoryChangesFilters = (): UseProductCategoriesFiltersReturn => {
    const state = useContext(ProductCategoryChangesContext)
    const [minCreateDate, setMinCreateDate] = useState<string>('')
    const [maxCreateDate, setMaxCreateDate] = useState<string>('')
    const [isApplyEnabled, setIsApplyEnabled] = useState<boolean>(false)
    const [isResetEnabled, setIsResetEnabled] = useState<boolean>(false)

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

        setIsResetEnabled(false)
    }, [state])

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

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset }
}

export default useProductCategoryChangesFilters
