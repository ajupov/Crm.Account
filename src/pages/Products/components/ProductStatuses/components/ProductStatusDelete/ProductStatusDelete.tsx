import React, { FC, useContext } from 'react'

import Delete from '../../../../../../components/Delete/Delete'
import ProductStatusesActionsContext from '../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import useProductStatusDelete from './hooks/useProductStatusDelete'

const ProductStatusDelete: FC = () => {
    const state = useContext(ProductStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductStatusDelete()

    return (
        <Delete
            isDeleting={state.isDeleting}
            title="Удаление статуса"
            content="Вы уверены, что хотите удалить статус?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductStatusDelete
