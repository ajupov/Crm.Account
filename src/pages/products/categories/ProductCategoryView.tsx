import React, { FC, useEffect } from 'react'
import View, { ViewDataProps } from '../../../components/view/View'

import Page from '../../../components/page/Page'
import ProductCategoryView from '../../../../api/products/models/ProductCategory'
import { setPageTitle } from '../../../helpers/pageHelper'
import useDeleteActions from './hooks/useDeleteActions'
import useEditActions from './hooks/useEditActions'
import { useParams } from 'react-router-dom'
import useProductCategory from './hooks/useProductCategory'
import useProductsMenu from '../hooks/useProductsMenu'
import useRestoreActions from './hooks/useRestoreActions'
import useViewActions from './hooks/useViewActions'

const ProductCategoryView: FC = () => {
    const title = 'Просмотр категории'

    const { id } = useParams()
    const { menu } = useProductsMenu()
    const { onClickBack } = useViewActions()
    const { onClickEdit } = useEditActions()
    const { onClickDelete } = useDeleteActions()
    const { onClickRestore } = useRestoreActions()
    const { isLoading, category } = useProductCategory(id)

    useEffect(() => setPageTitle(title), [])

    const map = (category: ProductCategoryView): ViewDataProps[] => [
        { label: 'Наименование', value: category.name },
        { label: 'Удален', value: category.isDeleted ? 'Да' : 'Нет' }
    ]

    return (
        <Page title={title} menu={menu}>
            {id && category && (
                <View
                    isLoading={isLoading}
                    isDeleted={category.isDeleted}
                    createDate={category.createDateTime}
                    lastModifyDateTime={category.modifyDateTime}
                    data={map(category)}
                    onClickBack={onClickBack}
                    onClickEdit={onClickEdit(id)}
                    onClickDelete={onClickDelete(id)}
                    onClickRestore={onClickRestore(id)}
                />
            )}
        </Page>
    )
}

export default ProductCategoryView
