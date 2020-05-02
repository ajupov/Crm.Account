import React, { FC, useContext } from 'react'

import ProductStatusesActionsContext from '../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import Restore from '../../../../../../components/Restore/Restore'
import useProductStatusRestore from './hooks/useProductStatusRestore'

const ProductStatusRestore: FC = () => {
    const state = useContext(ProductStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductStatusRestore()

    return (
        <Restore
            isRestoring={state.isRestoring}
            title="Восстановление статуса"
            content="Вы уверены, что хотите восстановить статус?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ProductStatusRestore
