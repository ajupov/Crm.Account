import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import SupplierAttributesActionsContext from '../../contexts/SupplierAttributesActionsContext/SupplierAttributesActionsContext'
import useSupplierAttributeRestore from './hooks/useSupplierAttributeRestore'

// TODO: Move to l10n
const SupplierAttributeRestore: FC = () => {
    const state = useContext(SupplierAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useSupplierAttributeRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление атрибута"
            content="Вы уверены, что хотите восстановить атрибут?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default SupplierAttributeRestore
