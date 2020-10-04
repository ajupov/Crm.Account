import { useCallback, useContext } from 'react'

import CompanyAttribute from '../../../../../../../../api/companies/models/CompanyAttribute'
import CompanyAttributesActionsContext from '../../../contexts/CompanyAttributesActionsContext/CompanyAttributesActionsContext'
import CompanyAttributesRoutes from '../../../routes/CompanyAttributesRoutes'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseCompanyAttributeViewReturn {
    map: (attribute: CompanyAttribute) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCompanyAttributeView = (): UseCompanyAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(CompanyAttributesActionsContext)

    const onClickEdit = useCallback((id: string) => history.push(`${CompanyAttributesRoutes.Edit}/${id}`), [history])

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
        (attribute: CompanyAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel }
}

export default useCompanyAttributeView
