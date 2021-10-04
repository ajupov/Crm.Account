import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import OrderAttributesActionsContext from '../../contexts/OrderAttributesActionsContext/OrderAttributesActionsContext'
import useOrderAttributeDelete from './hooks/useOrderAttributeDelete'

// TODO: Move to l10n
const OrderAttributeDelete: FC = () => {
    const state = useContext(OrderAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useOrderAttributeDelete()

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

export default OrderAttributeDelete
