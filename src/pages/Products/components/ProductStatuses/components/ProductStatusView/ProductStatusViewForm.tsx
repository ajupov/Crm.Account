import React, { FC, useContext } from 'react'

import ProductStatusContext from '../../contexts/ProductStatusContext/ProductStatusContext'
import View from '../../../../../../components/View/View'
import useProductStatusView from './hooks/useProductStatusView'
import useProductStatusesActions from '../../contexts/ProductStatusesActionsContext/hooks/useProductStatusesActions'

const ProductStatusViewForm: FC = () => {
    const state = useContext(ProductStatusContext)
    const { isLoading } = useProductStatusesActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel, onClickHistory } = useProductStatusView()

    return (
        <View
            id={state.status.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.status.isDeleted}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            data={map(state.status)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            onClickHistory={onClickHistory}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductStatusViewForm