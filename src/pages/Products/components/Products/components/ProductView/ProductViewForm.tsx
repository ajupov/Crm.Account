import React, { FC, useContext } from 'react'

import ProductContext from '../../contexts/ProductContext/ProductContext'
import View from '../../../../../../components/View/View'
import useProductView from './hooks/useProductView'
import useProductsActions from '../../contexts/ProductsActionsContext/hooks/useProductsActions'

const ProductViewForm: FC = () => {
    const state = useContext(ProductContext)
    const { isLoading } = useProductsActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel, onClickHistory } = useProductView()

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
            onClickHistory={onClickHistory}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductViewForm
