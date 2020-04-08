import { useState } from 'react'

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
}

const useProductCategoriesFilters = (): UseProductCategoriesFiltersReturn => {
    const [name, setName] = useState<string | undefined>()
    const [isDeleted, setIsDeleted] = useState<boolean | undefined>(false)
    const [minCreateDate, setMinCreateDate] = useState<string | undefined>()
    const [maxCreateDate, setMaxCreateDate] = useState<string | undefined>()
    const [minModifyDate, setMinModifyDate] = useState<string | undefined>()
    const [maxModifyDate, setMaxModifyDate] = useState<string | undefined>()

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
        setMaxModifyDate
    }
}

export default useProductCategoriesFilters
