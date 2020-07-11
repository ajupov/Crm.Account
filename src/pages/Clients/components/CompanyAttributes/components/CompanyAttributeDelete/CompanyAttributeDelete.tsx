import React, { FC, useContext } from 'react'

import CompanyAttributesActionsContext from '../../contexts/CompanyAttributesActionsContext/CompanyAttributesActionsContext'
import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import useCompanyAttributeDelete from './hooks/useCompanyAttributeDelete'

// TODO: Move to l10n
const CompanyAttributeDelete: FC = () => {
    const state = useContext(CompanyAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useCompanyAttributeDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление атрибута"
            content="Вы уверены, что хотите удалить атрибут?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default CompanyAttributeDelete
