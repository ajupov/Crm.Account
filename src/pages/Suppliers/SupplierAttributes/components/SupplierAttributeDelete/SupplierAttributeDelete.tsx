import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import SupplierAttributesActionsContext from '../../contexts/SupplierAttributesActionsContext/SupplierAttributesActionsContext'
import useSupplierAttributeDelete from './hooks/useSupplierAttributeDelete'

// TODO: Move to l10n
const SupplierAttributeDelete: FC = () => {
    const state = useContext(SupplierAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useSupplierAttributeDelete()

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

export default SupplierAttributeDelete
