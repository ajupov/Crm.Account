import { useCallback, useState } from 'react'

interface UseRestoreActionsReturn {
    isRestoring: boolean
    onClickRestore: (id: string) => () => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useRestoreActions = (): UseRestoreActionsReturn => {
    const [ids, setIds] = useState<string[]>([])
    const [isRestoring, setIsRestoring] = useState<boolean>(false)

    const onClickRestore = useCallback(
        (id: string) => (): void => {
            setIds([id])
            setIsRestoring(true)
        },
        []
    )

    const onClickConfirm = useCallback((): void => {
        global.console.log(ids)

        setIsRestoring(false)
    }, [ids])

    const onClickCancel = useCallback((): void => {
        setIds([])

        setIsRestoring(false)
    }, [])

    return { isRestoring, onClickRestore, onClickConfirm, onClickCancel }
}

export default useRestoreActions
