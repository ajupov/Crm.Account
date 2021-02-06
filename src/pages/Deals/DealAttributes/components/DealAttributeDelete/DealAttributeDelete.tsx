import React, { FC, useContext } from 'react'

import DealAttributesActionsContext from '../../contexts/DealAttributesActionsContext/DealAttributesActionsContext'
import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import useDealAttributeDelete from './hooks/useDealAttributeDelete'

// TODO: Move to l10n
const DealAttributeDelete: FC = () => {
    const state = useContext(DealAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useDealAttributeDelete()

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

export default DealAttributeDelete
