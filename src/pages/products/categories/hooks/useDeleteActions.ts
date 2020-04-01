import { useCallback, useState } from 'react'

interface UseDeleteActionsReturn {
    isDeleting: boolean
    onClickDelete: (id: string) => () => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useDeleteActions = (): UseDeleteActionsReturn => {
    const [ids, setIds] = useState<string[]>([])
    const [isDeleting, setIsDeleting] = useState<boolean>(false)

    const onClickDelete = useCallback(
        (id: string) => () => {
            setIds([id])
            setIsDeleting(true)
        },
        []
    )

    const onClickConfirm = useCallback(() => {
        global.console.log(ids)
        setIsDeleting(false)
    }, [ids])

    const onClickCancel = useCallback(() => {
        setIds([])
        setIsDeleting(false)
    }, [])

    return { isDeleting, onClickDelete, onClickConfirm, onClickCancel }
}

export default useDeleteActions
