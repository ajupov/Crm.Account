import React, { FC, useContext } from 'react'

import ProductAttributeContext from '../../contexts/ProductAttributeContext/ProductAttributeContext'
import ProductAttributesRoutes from '../../routes/ProductAttributesRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useProductAttributeView from './hooks/useProductAttributeView'
import useProductAttributesActions from '../../contexts/ProductAttributesActionsContext/hooks/useProductAttributesActions'

const ProductAttributeViewForm: FC = () => {
    const state = useContext(ProductAttributeContext)
    const { isLoading } = useProductAttributesActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel } = useProductAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={ProductAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductAttributeViewForm
