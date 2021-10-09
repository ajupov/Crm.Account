import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import ProductStatusesActionsContext from '../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import useProductStatusDelete from './hooks/useProductStatusDelete'

// TODO: Move to l10n
const ProductStatusDelete: FC = () => {
    const state = useContext(ProductStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductStatusDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление статуса"
            content="Вы уверены, что хотите удалить статус?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductStatusDelete
