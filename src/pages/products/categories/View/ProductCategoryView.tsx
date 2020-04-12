import React, { FC, useEffect } from 'react'
import View, { ViewDataProps } from '../../../../components/View/View'

import Page from '../../../../components/Page/Page'
import ProductCategory from '../../../../../api/products/models/ProductCategory'
import ProductCategoryContext from '../contexts/ProductCategoryContext'
import { setPageTitle } from '../../../../helpers/pageHelper'
import useProductCategory from '../hooks/useProductCategory'
import useProductCategoryView from './hooks/useProductCategoryView'
import useProductsMenu from '../../hooks/useProductsMenu'

const ProductCategoryView: FC = () => {
    const title = 'Просмотр категории'

    const state = useProductCategory()
    const menu = useProductsMenu()
    const { onClickEdit, onClickDelete, onClickRestore, onClickCancel } = useProductCategoryView()

    useEffect(() => setPageTitle(title), [])

    const map = (category: ProductCategory): ViewDataProps[] => [
        { label: 'Наименование', value: category.name },
        { label: 'Удален', value: category.isDeleted ? 'Да' : 'Нет' }
    ]

    return (
        <ProductCategoryContext.Provider value={state}>
            <Page title={title} menu={menu}>
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
            </Page>
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryView
