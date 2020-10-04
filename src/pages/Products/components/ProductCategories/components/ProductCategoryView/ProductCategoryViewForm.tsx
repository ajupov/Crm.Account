import React, { FC, useContext } from 'react'

import ProductCategoriesRoutes from '../../routes/ProductCategoriesRoutes'
import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import View from '../../../../../../components/common/grids/View/View'
import useProductCategoriesActions from '../../contexts/ProductCategoriesActionsContext/hooks/useProductCategoriesActions'
import useProductCategoryView from './hooks/useProductCategoryView'

const ProductCategoryViewForm: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { isLoading } = useProductCategoriesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useProductCategoryView()

    return (
        <View
            id={state.category.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.category.isDeleted}
            createDate={state.category.createDateTime}
            lastModifyDateTime={state.category.modifyDateTime}
            data={map(state.category)}
            editLink={ProductCategoriesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={ProductCategoriesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCategoryViewForm
