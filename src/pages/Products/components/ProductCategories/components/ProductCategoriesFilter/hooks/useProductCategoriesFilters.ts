import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useState } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import { toBoolean } from '../../../../../../../utils/boolean/booleanUtils'

interface UseProductCategoriesFiltersReturn {
    name: string
    onChangeName: (_: any, { value }: InputOnChangeData) => void
    isDeleted: boolean
    onChangeIsDeleted: (_: any, { value }: CheckboxProps) => void
    minCreateDate: string
    onChangeMinCreateDate: (_: any, { value }: InputOnChangeData) => void
    maxCreateDate: string
    onChangeMaxCreateDate: (_: any, { value }: InputOnChangeData) => void
    minModifyDate: string
    onChangeMinModifyDate: (_: any, { value }: InputOnChangeData) => void
    maxModifyDate: string
    onChangeMaxModifyDate: (_: any, { value }: InputOnChangeData) => void
    onApply: () => void
    onReset: () => void
}

const useProductCategoriesFilters = (): UseProductCategoriesFiltersReturn => {
    const state = useContext(ProductCategoriesContext)
    const [name, setName] = useState<string>('')
    const [isDeleted, setIsDeleted] = useState<boolean>(false)
    const [minCreateDate, setMinCreateDate] = useState<string>('')
    const [maxCreateDate, setMaxCreateDate] = useState<string>('')
    const [minModifyDate, setMinModifyDate] = useState<string>('')
    const [maxModifyDate, setMaxModifyDate] = useState<string>('')

    const onChangeName = useCallback((_, { value }: InputOnChangeData) => setName(value), [setName])

    const onChangeIsDeleted = useCallback((_, data: CheckboxProps) => setIsDeleted(toBoolean(data.value)), [
        setIsDeleted
    ])

    const onChangeMinCreateDate = useCallback((_, data: InputOnChangeData) => setMinCreateDate(data.value), [
        setMinCreateDate
    ])

    const onChangeMaxCreateDate = useCallback((_, data: InputOnChangeData) => setMaxCreateDate(data.value), [
        setMaxCreateDate
    ])

    const onChangeMinModifyDate = useCallback((_, data: InputOnChangeData) => setMinModifyDate(data.value), [
        setMinModifyDate
    ])

    const onChangeMaxModifyDate = useCallback((_, data: InputOnChangeData) => setMaxModifyDate(data.value), [
        setMaxModifyDate
    ])

    const onApply = useCallback(() => {
        state.setRequest({
            ...state.request,
            name,
            isDeleted,
            minCreateDate,
            maxCreateDate,
            minModifyDate,
            maxModifyDate,
            offset: 0
        })
    }, [isDeleted, maxCreateDate, maxModifyDate, minCreateDate, minModifyDate, name, state])

    const onReset = useCallback(() => {
        setName('')
        setIsDeleted(false)
        setMinCreateDate('')
        setMaxCreateDate('')
        setMinModifyDate('')
        setMaxModifyDate('')

        state.setRequest({
            ...state.request,
            name: '',
            isDeleted: false,
            minCreateDate: '',
            maxCreateDate: '',
            minModifyDate: '',
            maxModifyDate: '',
            offset: 0
        })
    }, [state])

    return {
        name,
        onChangeName,
        isDeleted,
        onChangeIsDeleted,
        minCreateDate,
        onChangeMinCreateDate,
        maxCreateDate,
        onChangeMaxCreateDate,
        minModifyDate,
        onChangeMinModifyDate,
        maxModifyDate,
        onChangeMaxModifyDate,
        onApply,
        onReset
    }
}

export default useProductCategoriesFilters
