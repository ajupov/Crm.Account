import { useCallback, useState } from 'react'

import { useHistory } from 'react-router'
import useProductCategory from './useProductCategory'

interface UseEditActionsReturn {
    name: string | undefined
    setName: (value: string) => void
    isDeleted: boolean | undefined
    setIsDeleted: (value: boolean) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useEditActions = (id: string | undefined): UseEditActionsReturn => {
    const path = '/products/categories'

    const { save } = useProductCategory(id)

    const [name, setName] = useState<string | undefined>()
    const [isDeleted, setIsDeleted] = useState<boolean | undefined>(false)

    const history = useHistory()

    const onClickConfirm = useCallback((): void => save(), [save])

    const onClickCancel = useCallback((): void => history.push(path), [history])

    return {
        name,
        setName,
        isDeleted,
        setIsDeleted,
        onClickConfirm,
        onClickCancel
    }
}

export default useEditActions
