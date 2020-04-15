/* eslint-disable react/jsx-no-bind */

import React, { FC, useContext } from 'react'

import { Button } from 'semantic-ui-react'
import { ProductCategoriesRoutes } from '../../routes/ProductCategoriesRoutes'
import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import View from '../../../../../../components/View/View'
import { useHistory } from 'react-router'
import useProductCategoryView from './hooks/useProductCategoryView'

const ProductCategoryViewForm: FC = () => {
    const history = useHistory()
    const state = useContext(ProductCategoryContext)
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel } = useProductCategoryView()

    return (
        <>
            <Button
                onClick={() => {
                    history.push(`${ProductCategoriesRoutes.Changes}/${state.category.id}`)
                }}
            >
                История
            </Button>
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
        </>
    )
}

export default ProductCategoryViewForm
