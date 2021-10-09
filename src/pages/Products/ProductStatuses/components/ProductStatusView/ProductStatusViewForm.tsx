import React, { FC, useContext } from 'react'

import ProductStatusContext from '../../contexts/ProductStatusContext/ProductStatusContext'
import ProductStatusesRoutes from '../../routes/ProductStatusesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useProductStatusView from './hooks/useProductStatusView'
import useProductStatusesActions from '../../contexts/ProductStatusesActionsContext/hooks/useProductStatusesActions'

const ProductStatusViewForm: FC = () => {
    const state = useContext(ProductStatusContext)
    const { isLoading } = useProductStatusesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useProductStatusView()

    return (
        <View
            id={state.status.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.status.isDeleted}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            data={map(state.status)}
            editLink={ProductStatusesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={ProductStatusesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductStatusViewForm
