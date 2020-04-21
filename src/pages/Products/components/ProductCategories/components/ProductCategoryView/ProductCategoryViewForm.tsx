import React, { FC, useContext } from 'react'

import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import View from '../../../../../../components/View/View'
import useProductCategoriesActions from '../../contexts/ProductCategoriesActionsContext/hooks/useProductCategoriesActions'
import useProductCategoryView from './hooks/useProductCategoryView'

const ProductCategoryViewForm: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { isLoading } = useProductCategoriesActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel, onClickHistory } = useProductCategoryView()

    return (
        <View
            id={state.category.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.category.isDeleted}
            createDate={state.category.createDateTime}
            lastModifyDateTime={state.category.modifyDateTime}
            data={map(state.category)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            onClickCancel={onClickCancel}
            onClickHistory={onClickHistory}
        />
    )
}

export default ProductCategoryViewForm
