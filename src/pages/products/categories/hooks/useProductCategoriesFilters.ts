import { useCallback, useState } from 'react'

import useProductCategories from './useProductCategories'

interface UseProductCategoriesFiltersReturn {
    name?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    setName: (value?: string) => void
    setIsDeleted: (value?: boolean) => void
    setMinCreateDate: (value?: string) => void
    setMaxCreateDate: (value?: string) => void
    setMinModifyDate: (value?: string) => void
    setMaxModifyDate: (value?: string) => void
    onClickApply: () => void
    onClickClear: () => void
}

const useProductCategoriesFilters = (): UseProductCategoriesFiltersReturn => {
    const { offset, limit, sortBy, orderBy, setRequest } = useProductCategories()

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
        setRequest({
            name,
            isDeleted,
            minCreateDate,
            maxCreateDate,
            minModifyDate,
            maxModifyDate,
            limit,
            offset,
            sortBy,
            orderBy
        })
    }, [
        isDeleted,
        limit,
        maxCreateDate,
        maxModifyDate,
        minCreateDate,
        minModifyDate,
        name,
        offset,
        orderBy,
        setRequest,
        sortBy
    ])

    return {
        name,
        isDeleted,
        minCreateDate,
        maxCreateDate,
        minModifyDate,
        maxModifyDate,
        setName,
        setIsDeleted,
        setMinCreateDate,
        setMaxCreateDate,
        setMinModifyDate,
        setMaxModifyDate,
        onClickApply,
        onClickClear
    }
}

export default useProductCategoriesFilters
