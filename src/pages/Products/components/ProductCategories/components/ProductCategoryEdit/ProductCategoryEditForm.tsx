import React, { FC, useContext } from 'react'

import Edit from '../../../../../../components/Edit/Edit'
import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import useProductCategoryEdit from './hooks/useProductCategoryEdit'

const ProductCategoryEditForm: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { fields, isConfirmEnabled, onClickCancel, onClickConfirm } = useProductCategoryEdit()

    return (
        <Edit
            fields={fields}
            isLoading={state.isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.category.createDateTime}
            lastModifyDateTime={state.category.modifyDateTime}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCategoryEditForm
