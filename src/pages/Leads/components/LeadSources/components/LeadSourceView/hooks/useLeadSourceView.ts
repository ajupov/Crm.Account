import { useCallback, useContext } from 'react'

import CustomerSource from '../../../../../../../../api/customers/models/CustomerSource'
import CustomerSourcesActionsContext from '../../../contexts/CustomerSourcesActionsContext/CustomerSourcesActionsContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseCustomerSourceViewReturn {
    map: (source: CustomerSource) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCustomerSourceView = (): UseCustomerSourceViewReturn => {
    const history = useHistory()
    const state = useContext(CustomerSourcesActionsContext)

    const onClickDelete = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsDeleting(true)
        },
        [state]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsRestoring(true)
        },
        [state]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (source: CustomerSource): ViewDataProps[] => [
            { label: 'Наименование', value: source.name },
            { label: 'Удален', value: source.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useCustomerSourceView
