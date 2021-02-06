import React, { FC, useContext } from 'react'

import DealAttributesActionsContext from '../../contexts/DealAttributesActionsContext/DealAttributesActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useDealAttributeRestore from './hooks/useDealAttributeRestore'

// TODO: Move to l10n
const DealAttributeRestore: FC = () => {
    const state = useContext(DealAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useDealAttributeRestore()

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

export default DealAttributeRestore
