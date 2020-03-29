import { useCallback } from 'react'

interface UseDownloadActionsReturn {
    onClickDownloadAsCsv: () => void
}

const useDownloadActions = (): UseDownloadActionsReturn => {
    const onClickDownloadAsCsv = useCallback((): void => global.console.log(), [])

    return { onClickDownloadAsCsv }
}

export default useDownloadActions
