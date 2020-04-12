import React, { FC, useContext } from 'react'
import View, { ViewDataProps } from '../../../../../../components/View/View'

import ProductCategory from '../../../../../../../api/products/models/ProductCategory'
import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import useProductCategoryView from './hooks/useProductCategoryView'

const ProductCategoryViewForm: FC = () => {
    const state = useContext(ProductCategoryContext)

    const { onClickEdit, onClickDelete, onClickRestore, onClickCancel } = useProductCategoryView()

    const map = (category: ProductCategory): ViewDataProps[] => [
        { label: 'Наименование', value: category.name },
        { label: 'Удален', value: category.isDeleted ? 'Да' : 'Нет' }
    ]

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
