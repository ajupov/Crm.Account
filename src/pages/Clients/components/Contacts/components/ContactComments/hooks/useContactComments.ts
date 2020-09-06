import { useCallback, useContext } from 'react'

import ContactCommentsContext from '../../../contexts/ContactCommentsContext/ContactCommentsContext'

interface UseContactCommentsTableReturn {
    // onClickSend: () => void
    // map: (contacts: ContactComment[]) => ContactComment[]
    onClickLoadPrevious: () => void
}

// TODO: Move to l10n
const useContactComments = (): UseContactCommentsTableReturn => {
    const state = useContext(ContactCommentsContext)

    const onClickLoadPrevious = useCallback(
        () => state.setRequest({ ...state.request, afterCreateDateTime: state.request.afterCreateDateTime }),
        [state]
    )

    return { onClickLoadPrevious }
}

export default useContactComments
