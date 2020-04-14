import React, { FC, useContext } from 'react'

import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import View from '../../../../../../components/View/View'
import useProductCategoryView from './hooks/useProductCategoryView'

const ProductCategoryViewForm: FC = () => {
    const state = useContext(ProductCategoryContext)

    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel } = useProductCategoryView()

    return (
        <View
            id={state.category.id}
            isLoading={state.isLoading}
            isDeleted={state.category.isDeleted}
            createDate={state.category.createDateTime}
            lastModifyDateTime={state.category.modifyDateTime}
            data={map(state.category)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCategoryViewForm
