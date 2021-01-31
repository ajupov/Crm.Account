import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import ProductCategoriesRoutes from '../../routes/ProductCategoriesRoutes'
import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import useProductCategoriesActions from '../../contexts/ProductCategoriesActionsContext/hooks/useProductCategoriesActions'
import useProductCategoryOnChange from '../../hooks/change/useProductCategoryOnChange'

const ProductCategoryEditForm: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { isLoading } = useProductCategoriesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useProductCategoryOnChange()

    return state.category.id ? (
        <EditForm
            id={state.category.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.category.createDateTime}
            lastModifyDateTime={state.category.modifyDateTime}
            historyLink={ProductCategoriesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ProductCategoryEditForm
