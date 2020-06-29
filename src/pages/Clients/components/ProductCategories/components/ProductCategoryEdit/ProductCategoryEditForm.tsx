import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import useProductCategoriesActions from '../../contexts/ProductCategoriesActionsContext/hooks/useProductCategoriesActions'
import useProductCategoryEdit from './hooks/useProductCategoryEdit'

const ProductCategoryEditForm: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { isLoading } = useProductCategoriesActions()
    const { fields, isConfirmEnabled, onClickHistory, onClickCancel, onClickConfirm } = useProductCategoryEdit()

    return state.category.id ? (
        <EditForm
            id={state.category.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.category.createDateTime}
            lastModifyDateTime={state.category.modifyDateTime}
            onClickHistory={onClickHistory}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ProductCategoryEditForm
