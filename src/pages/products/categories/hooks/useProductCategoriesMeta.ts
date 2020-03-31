import { useState } from 'react'

interface UseProductCategoriesMetaReturn {
    lastModifyDateTime?: string
    setLastModifyDateTime: (value?: string) => void
}

const useProductCategoriesMeta = (): UseProductCategoriesMetaReturn => {
    const [lastModifyDateTime, setLastModifyDateTime] = useState<string | undefined>()

    return { lastModifyDateTime, setLastModifyDateTime }
}

export default useProductCategoriesMeta
