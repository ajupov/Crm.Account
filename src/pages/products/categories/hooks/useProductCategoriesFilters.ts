import { useCallback, useState } from 'react'

import useProductCategories from './useProductCategories'

interface UseProductCategoriesFiltersReturn {
    name?: string
    setName: (value?: string) => void
    isDeleted?: boolean
    setIsDeleted: (value?: boolean) => void
    minCreateDate?: string
    setMinCreateDate: (value?: string) => void
    maxCreateDate?: string
    setMaxCreateDate: (value?: string) => void
    minModifyDate?: string
    setMinModifyDate: (value?: string) => void
    setMaxModifyDate: (value?: string) => void
    maxModifyDate?: string
    onClickApply: () => void
    onClickClear: () => void
}

const useProductCategoriesFilters = (): UseProductCategoriesFiltersReturn => {
    const { request, setRequest } = useProductCategories()

    const [name, setName] = useState<string | undefined>()
    const [isDeleted, setIsDeleted] = useState<boolean | undefined>(false)
    const [minCreateDate, setMinCreateDate] = useState<string | undefined>()
    const [maxCreateDate, setMaxCreateDate] = useState<string | undefined>()
    const [minModifyDate, setMinModifyDate] = useState<string | undefined>()
    const [maxModifyDate, setMaxModifyDate] = useState<string | undefined>()

    const onClickClear = useCallback(() => {
        setName(void 0)
        setIsDeleted(false)
        setMinCreateDate(void 0)
        setMaxCreateDate(void 0)
        setMinModifyDate(void 0)
        setMaxModifyDate(void 0)
    }, [])

    const onClickApply = useCallback(() => {
        setRequest({ ...request, name, isDeleted, minCreateDate, maxCreateDate, minModifyDate, maxModifyDate })
    }, [isDeleted, maxCreateDate, maxModifyDate, minCreateDate, minModifyDate, name, request, setRequest])

    return {
        name,
        setName,
        isDeleted,
        setIsDeleted,
        minCreateDate,
        setMinCreateDate,
        maxCreateDate,
        setMaxCreateDate,
        minModifyDate,
        setMinModifyDate,
        maxModifyDate,
        setMaxModifyDate,
        onClickApply,
        onClickClear
    }
}

export default useProductCategoriesFilters
