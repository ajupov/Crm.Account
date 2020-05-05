import React, { FC, useContext } from 'react'

import Edit from '../../../../../../components/Edit/Edit'
import ProductContext from '../../contexts/ProductContext/ProductContext'
import useProductEdit from './hooks/useProductEdit'
import useProductsActions from '../../contexts/ProductsActionsContext/hooks/useProductsActions'

const ProductEditForm: FC = () => {
    const state = useContext(ProductContext)
    const { isLoading } = useProductsActions()
    const { fields, isConfirmEnabled, onClickHistory, onClickCancel, onClickConfirm } = useProductEdit()

    return state.product.id ? (
        <Edit
            id={state.product.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.product.createDateTime}
            lastModifyDateTime={state.product.modifyDateTime}
            onClickHistory={onClickHistory}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ProductEditForm
