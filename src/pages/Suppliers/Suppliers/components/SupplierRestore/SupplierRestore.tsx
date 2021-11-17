import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import SuppliersActionsContext from '../../contexts/SuppliersActionsContext/SuppliersActionsContext'
import useSupplierRestore from './hooks/useSupplierRestore'

// TODO: Move to l10n
const SupplierRestore: FC = () => {
    const state = useContext(SuppliersActionsContext)
    const { onClickConfirm, onClickCancel } = useSupplierRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление поставщика"
            content="Вы уверены, что хотите восстановить поставщика?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default SupplierRestore
