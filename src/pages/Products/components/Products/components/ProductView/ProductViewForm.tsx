import React, { FC, useContext } from 'react'

import ProductContext from '../../contexts/ProductContext/ProductContext'
import ProductsRoutes from '../../routes/ProductsRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useProductView from './hooks/useProductView'
import useProductsActions from '../../contexts/ProductsActionsContext/hooks/useProductsActions'

const ProductViewForm: FC = () => {
    const state = useContext(ProductContext)
    const { isLoading } = useProductsActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel } = useProductView()

    return (
        <View
            id={state.product.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.product.isDeleted}
            createDate={state.product.createDateTime}
            lastModifyDateTime={state.product.modifyDateTime}
            data={map(state.product)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={ProductsRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductViewForm
