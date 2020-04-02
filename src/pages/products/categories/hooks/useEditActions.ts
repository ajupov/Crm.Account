import { useCallback, useContext, useState } from 'react'

import ProductCategoryContext from '../contexts/ProductCategoryContext'
import { useHistory } from 'react-router'

interface UseEditActionsReturn {
    name: string | undefined
    setName: (value: string) => void
    isDeleted: boolean | undefined
    setIsDeleted: (value: boolean) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useEditActions = (): UseEditActionsReturn => {
    const path = '/products/categories'

    const state = useContext(ProductCategoryContext)

    const [isDeleted, setIsDeleted] = useState<boolean | undefined>(false)

    const history = useHistory()

    const onClickConfirm = useCallback((): void => state.save(), [state])

    const onClickCancel = useCallback((): void => history.push(path), [history])

    const setName = (name: string): void => {
        state.setCategory({ ...state.category, name })
    }

    return {
        name: state.category.name,
        setName,
        isDeleted,
        setIsDeleted,
        onClickConfirm,
        onClickCancel
    }
}

export default useEditActions
