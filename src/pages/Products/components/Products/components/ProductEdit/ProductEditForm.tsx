import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import ProductContext from '../../contexts/ProductContext/ProductContext'
import ProductsRoutes from '../../routes/ProductsRoutes'
import useProductOnChange from '../../hooks/change/useProductOnChange'
import useProductsActions from '../../contexts/ProductsActionsContext/hooks/useProductsActions'

const ProductEditForm: FC = () => {
    const state = useContext(ProductContext)
    const { isLoading } = useProductsActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useProductOnChange()

    return state.product.id ? (
        <EditForm
            id={state.product.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.product.createDateTime}
            lastModifyDateTime={state.product.modifyDateTime}
            historyLink={ProductsRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ProductEditForm
