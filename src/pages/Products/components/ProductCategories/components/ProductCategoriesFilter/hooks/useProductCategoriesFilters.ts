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
    isApplyEnabled: boolean
    onApply: () => void
    isResetEnabled: boolean
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

    const [isApplyEnabled, setIsApplyEnabled] = useState<boolean>(false)
    const [isResetEnabled, setIsResetEnabled] = useState<boolean>(false)

    const onChangeName = useCallback(
        (_, { value }: InputOnChangeData) => {
            setName(value)
            setIsApplyEnabled(true)
        },
        [setName]
    )

    const onChangeIsDeleted = useCallback(
        (_, data: CheckboxProps) => {
            setIsDeleted(toBoolean(data.value))
            setIsApplyEnabled(true)
        },
        [setIsDeleted]
    )

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

    const onChangeMinModifyDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMinModifyDate(data.value)
            setIsApplyEnabled(true)
        },
        [setMinModifyDate]
    )

    const onChangeMaxModifyDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMaxModifyDate(data.value)
            setIsApplyEnabled(true)
        },
        [setMaxModifyDate]
    )

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

        setIsApplyEnabled(false)
        setIsResetEnabled(true)
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

        setIsResetEnabled(false)
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
        isApplyEnabled,
        onApply,
        isResetEnabled,
        onReset
    }
}

export default useProductCategoriesFilters
