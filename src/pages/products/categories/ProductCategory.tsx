import React, { FC } from 'react'
import View, { ViewDataProps } from '../../../components/view/View'

import Page from '../../../components/page/Page'
import ProductCategory from '../../../../api/products/models/ProductCategory'
import useDeleteActions from './hooks/actions/useDeleteActions'
import useEditActions from './hooks/actions/useEditActions'
import { useParams } from 'react-router-dom'
import useProductCategory from './hooks/useProductCategory'
import useProductsMenu from '../../../hooks/useProductsMenu'
import useRestoreActions from './hooks/actions/useRestoreActions'
import useViewActions from './hooks/actions/useViewActions'

const ProductCategory: FC = () => {
    const title = 'Просмотр категории'

    const { id } = useParams()
    const { menu } = useProductsMenu()
    const { onClickBack } = useViewActions()
    const { onClickEdit } = useEditActions()
    const { onClickDelete } = useDeleteActions()
    const { onClickRestore } = useRestoreActions()
    const { isLoading, category } = useProductCategory(id)

    const map = (category: ProductCategory): ViewDataProps[] => [
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

export default ProductCategory
