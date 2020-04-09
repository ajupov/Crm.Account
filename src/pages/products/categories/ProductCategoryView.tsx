import React, { FC, useEffect } from 'react'
import View, { ViewDataProps } from '../../../components/View/View'

import Page from '../../../components/Page/Page'
import ProductCategory from '../../../../api/products/models/ProductCategory'
import { setPageTitle } from '../../../helpers/pageHelper'
import useActions from './hooks/useActions'
import useDeleteActions from './hooks/useDeleteActions'
import { useParams } from 'react-router-dom'
import useProductCategory from './hooks/useProductCategory'
import useProductsMenu from '../hooks/useProductsMenu'
import useRestoreActions from './hooks/useRestoreActions'
import useViewActions from './hooks/useViewActions'

const ProductCategoryView: FC = () => {
    const title = 'Просмотр категории'

    const { id } = useParams()
    const menu = useProductsMenu()
    const { onClickBack } = useViewActions()
    const { onClickEdit } = useActions()
    const { onClickDelete } = useDeleteActions()
    const { onClickRestore } = useRestoreActions()
    const { isLoading, category } = useProductCategory(id)

    useEffect(() => setPageTitle(title), [])

    const map = (category: ProductCategory): ViewDataProps[] => [
        { label: 'Наименование', value: category.name },
        { label: 'Удален', value: category.isDeleted ? 'Да' : 'Нет' }
    ]

    return (
        <Page title={title} menu={menu}>
            {id && category && (
                <View
                    id={id}
                    isLoading={isLoading}
                    isDeleted={category.isDeleted}
                    createDate={category.createDateTime}
                    lastModifyDateTime={category.modifyDateTime}
                    data={map(category)}
                    onClickBack={onClickBack}
                    onClickEditButton={onClickEdit}
                    onClickDeleteButton={onClickDelete}
                    onClickRestoreButton={onClickRestore}
                />
            )}
        </Page>
    )
}

export default ProductCategoryView
