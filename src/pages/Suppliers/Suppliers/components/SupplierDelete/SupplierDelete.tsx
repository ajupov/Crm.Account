import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import SuppliersActionsContext from '../../contexts/SuppliersActionsContext/SuppliersActionsContext'
import useSupplierDelete from './hooks/useSupplierDelete'

// TODO: Move to l10n
const SupplierDelete: FC = () => {
    const state = useContext(SuppliersActionsContext)
    const { onClickConfirm, onClickCancel } = useSupplierDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление поставщика"
            content="Вы уверены, что хотите удалить поставщика?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default SupplierDelete
